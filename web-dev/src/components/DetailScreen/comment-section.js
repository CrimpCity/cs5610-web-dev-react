import "./detail-screen.css";
import CommentItem from "./comment-item";
import React, {useContext, useEffect, useReducer, useState} from "react";
import {useAuth} from "../../contexts/auth-context";
import {createNewCommentForTitle, getCommentsForTitle} from "../../services/comment-service";
import {useParams} from "react-router-dom";

const CommentsContext = React.createContext(null);
const initialComments = {comments: [], count: 0};

const commentsReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      const updatedComments = state.comments.map(comment => action._id !== comment._id ? {
        ...comment,
        comment: action.comment
      }: comment);
      return {...state, comments: updatedComments};
    case 'delete':
      const deletedComments = state.comments.filter(comment => comment._id !== action._id);
      return {comments: deletedComments, count: state.count - 1};
    case 'create':
      const createdComments = [action.comment, ...state.comments];
      return {comments:createdComments, count: state.count + 1};
    case 'get':
      return {comments: action.comments, count: action.count};
    case 'error':
      return {comments: [], count: 0};
    default:
      return state;
  }
}

const CommentSection = () => {
  const {getUserData} = useAuth();
  const {movieId} = useParams()
  const currentUser = getUserData();
  const [isSendingComment, setSendingComment] = useState(false);
  const [commentTextArea, setCommentTextArea] = useState("");
  const [comments, dispatchComments] = useReducer(commentsReducer, initialComments, (arg) => arg);
  const onCreateComment = event => {
    if (!event.shiftKey && event.key === 'Enter') {
      setSendingComment(true);
      createNewCommentForTitle(movieId, commentTextArea)
        .then(response => {
          const newComment = {
            _id: response.data._id,
            timestamp: response.data.timestamp,
            comment: commentTextArea,
            username: currentUser.username
          };
          dispatchComments({type: "create", comment: newComment});
        })
        .catch(() => alert('Fail to create a comment. Try again!'))
        .finally(() => void setSendingComment(false));
      event.preventDefault();
    }
  }

  useEffect(() => {
    getCommentsForTitle(movieId)
      .then(response => {
        dispatchComments({type: "get", comments: response.data.comments, count: response.data.count});
      })
      .catch(() => {
        dispatchComments({type: "error"});
      })
  }, [movieId])



  return (
    <>
      <h4>Comments <span className="fs-5">({comments.count} comments)</span></h4>
      <div className="list-group mb-3">

        {/* Create comment block (Show for critic only) */}
        {currentUser.isCritic &&
          <div className="list-group-item p-3">
            <div className="row">
              <div className="col-auto">
                <div className="d-flex justify-content-center align-items-center comment-avatar-icon bg-dark">
                  { currentUser.avatarImage && <img src={currentUser.avatarImage} className="comment-avatar-icon" /> }
                  { !currentUser.avatarImage && <i className="fas fa-user fa-2x"></i> }
                </div>
              </div>
              <div className="col">
            <textarea className="form-control comment-resize-none"
                      rows={3}
                      placeholder="Add a comment..."
                      disabled={isSendingComment}
                      value={commentTextArea}
                      onChange={event => void setCommentTextArea(event.target.value)}
                      onKeyDown={onCreateComment}></textarea>
              </div>
            </div>
          </div>
        }

        {/* Comments block */}
        <CommentsContext.Provider value={dispatchComments}>
          {comments && comments.comments.map(comment => (
            <CommentItem key={comment._id}
                         comment={comment} />
          ))}
        </CommentsContext.Provider>
      </div>
    </>
  );
}
export const useComments = () => useContext(CommentsContext);
export default CommentSection;