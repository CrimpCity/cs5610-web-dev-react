import "./profile-comments.css"
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { updateComment, deleteComment } from "../../actions/comments-actions.js"
import {useNavigate} from "react-router-dom";


const CommentListItem = (comment, index) => {
    let [editing, setEditing] = useState(false);
    const [commentText, sentCommentText] = useState(comment.comment);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const timestamp = new Intl.DateTimeFormat(undefined, {
        dateStyle: 'short',
        timeStyle: 'short'
    }).format(new Date(comment.postedOn));


    const formatted = (
        <div className="list-group-item " style={{ minWidth: "400px" }} key={index}>
            <div className="row">
                <div className="col-auto">
                    <img className="comment-avatar-icon mb-3"
                        src={comment.postedBy.avatarImage}
                        alt={comment.postedBy.username} />
                    <div className="d-flex align-items-start flex-column">
                        <div className="badge bg-primary m-0 rounded-pill wd-profile-component-usertype">
                            Critic
                        </div>
                        <div className="badge bg-primary mt-2 rounded-pill wd-profile-component-usertype">
                            Admin
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h6 className="fw-bold row">
                        <div className="col d-flex align-items-center">
                            <span className="text-decoration-none text-white fs-5 pt-2">
                                {comment.postedBy.username}
                            </span>
                            <span className="text-dark fw-light ms-2 pt-2">· {timestamp}</span>
                        </div>

                        {/* Allow edit/delete to current user's comments */}
                        <div className="col-auto">
                            {/* Comment option: edit / delete */}
                            {!editing &&
                                <>
                                    <button type="button" className="btn p-1 me-2" title="edit"
                                        onClick={() => {
                                            setEditing(true);
                                        }}>
                                        <i className="fas fa-pen"></i></button>
                                    <button
                                        type="button"
                                        className="btn p-1"
                                        title="delete"
                                        onClick={() => {
                                            deleteComment(dispatch, comment._id);
                                            setEditing(true);
                                        }}>

                                        <i className="fas fa-trash"></i>
                                    </button>
                                </>
                            }

                            {/* Comment edit toolbox */}
                            {editing &&
                                <div>
                                    <button
                                        type="button"
                                        className="btn p-1 me-2"
                                        title="accept"
                                        onClick={() => {
                                            updateComment(dispatch, comment._id, commentText);
                                            setEditing(false);
                                        }}><i className="fas fa-check"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn p-1"
                                        title="cancel"
                                        onClick={
                                            () => {
                                                setEditing(false);
                                                sentCommentText(comment.comment);
                                            }
                                        }>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            }
                        </div>
                    </h6>

                    {/* Comment edit box */}
                    {editing && <textarea className="form-control"
                        rows={3} value={commentText}
                        placeholder="Add a comment..."
                        onChange={event => { sentCommentText(event.target.value) }} required>
                    </textarea>}

                    {/* Movie Title */}
                    <p className="text-white fs-5 pt-3"
                    onClick = {()=> navigate(`/detail/${comment.movie.imdbID}`)}>
                        {comment.movie.movieTitle}
                    </p>
                    {/* Comment text */}
                    {!editing && <p>{commentText}</p>}
                </div>
            </div>
        </div>
    )


    return formatted
}

export default CommentListItem;