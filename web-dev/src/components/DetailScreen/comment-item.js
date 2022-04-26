import {useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/auth-context";
import {deleteCommentById, updateCommentById} from "../../services/comment-service";
import {useComments} from "./comment-section";
import "./detail-screen.css";

const CommentItem = ({comment = {}}) => {

  const {getUserData} = useAuth();
  const commentsDispatch = useComments()
  const currentUser = getUserData();
  let [editing, setEditing] = useState(false);
  const [commentText, setCommentText] = useState(comment.comment);
  const timestamp = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(new Date(comment.timestamp));

  const onUpdateComment = () => {
    updateCommentById(comment._id, commentText)
      .then(() => {
        commentsDispatch({type: 'update', _id: comment._id, comment: commentText})
        setEditing(false);
      }).catch(() => alert("Fail to update comment"));
  }

  const onDeleteComment = () => {
    deleteCommentById(comment._id)
      .then(() => {
        commentsDispatch({type: 'delete', _id: comment._id});
      }).catch(() => alert("Fail to delete comment"));
  }

  return (
    <div className="list-group-item">
      <div className="row">

        {/* Avatar image */}
        <div className="col-auto">

          {/* For user without avatar */}
          {!comment.avatar &&
            <div className="d-flex justify-content-center align-items-center comment-avatar-icon bg-primary mt-2">
              <i className="fas fa-user fa-2x"></i>
            </div>
          }

          {/* For user with avatar */}
          {comment.avatar &&
            <img className="comment-avatar-icon" src={comment.avatar} />
          }
        </div>
        <div className="col">
          <h6 className="fw-bold row">
            {/* Comment header */}
            <div className="col d-flex align-items-center">

              {/* For current user's comment */}
              {currentUser.username === comment.username && <span className="badge fs-6 fw-bold bg-dark">You</span>}

              {/* User profile display & link */}
              {currentUser.username !== comment.username &&
                <Link to={"/profile/" + comment.username} className="text-decoration-none text-white">
                  {comment.username}
                </Link>}

              {/* Comment timestamp */}
              <span className="text-dark fw-light ms-2">· {timestamp}</span>
            </div>

            {/* Allow edit/delete to current user's comments */}
            <div className="col-auto">
              {/* Comment option: edit / delete */}
              {!editing &&
                <>
                {currentUser.isCritic && currentUser.username === comment.username &&
                  <button type="button" className="btn p-1 me-2" title="edit" onClick={() => setEditing(true)}>
                    <i className="fas fa-pen"></i></button>
                }
                {((currentUser.isCritic && currentUser.username === comment.username) || currentUser.isAdmin) &&
                  <button type="button" className="btn p-1" title="delete" onClick={onDeleteComment}><i className="fas fa-trash"></i></button>
                }
                </>
              }

              {/* Comment edit toolbox */}
              {editing &&
                <>
                  <button type="button" className="btn p-1 me-2"
                          title="accept"
                          onClick={onUpdateComment}><i className="fas fa-check"></i></button>
                  <button type="button" className="btn p-1"
                          title="cancel"
                          onClick={() => {
                            setEditing(false);
                            setCommentText(comment.comment);
                          }}>
                    <i className="fas fa-times"></i></button>
                </>
              }
            </div>
          </h6>

          {/* Comment edit box */}
          {editing && <textarea className="form-control comment-resize-none"
                                rows={3} value={commentText}
                                placeholder="Add a comment..."
                                onChange={event => setCommentText(event.target.value)} required></textarea>}

          {/* Comment text */}
          {!editing && <p>{commentText}</p>}
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
