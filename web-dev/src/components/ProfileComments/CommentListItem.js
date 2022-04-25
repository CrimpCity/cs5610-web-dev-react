import "./profile-comments.css"
import { React, useState } from "react";


const CommentListItem = (comment, index) => {
    // Need to pull a user's own comments using API

    let [editing, setEditing] = useState(false);
    const [commentText, sentCommentText] = useState(comment.body);

    const formatted = (
        <div className="list-group-item " style={{minWidth:"400px"}} key={index}>
            <div className="row">
                <div className="col-auto">
                    <img className="comment-avatar-icon" src={comment.avatar} alt={comment.username} />
                </div>

                <div className="col">
                    <h6 className="fw-bold row">
                        <div className="col d-flex align-items-center">
                            <span className="text-decoration-none text-white fs-5">
                                {comment.username}
                                {<span className="badge bg-primary ms-2 rounded-pill">{comment.accountType}</span>}
                            </span>
                            <span className="text-dark fw-light ms-2">· {comment.postedOn}</span>
                        </div>

                        {/* Allow edit/delete to current user's comments */}
                        <div className="col-auto">
                            {/* Comment option: edit / delete */}
                            {!editing &&
                                <>
                                    <button type="button" className="btn p-1 me-2" title="edit" onClick={() => setEditing(true)}>
                                        <i className="fas fa-pen"></i></button>
                                    <button type="button" className="btn p-1" title="delete"><i className="fas fa-trash"></i></button>
                                </>
                            }

                            {/* Comment edit toolbox */}
                            {editing &&
                                <div>
                                    <button
                                        type="button"
                                        className="btn p-1 me-2"
                                        title="accept"
                                        onClick={() => setEditing(false)}><i className="fas fa-check"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn p-1"
                                        title="cancel"
                                        onClick={
                                            () => {
                                                setEditing(false);
                                                sentCommentText(comment.body);
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
                        onChange={event => sentCommentText(event.target.value)} required></textarea>}

                    {/* Movie Title */}
                    <p className="text-white fs-5 pt-1">{comment.movieTitle}</p>
                    {/* Comment text */}
                    {!editing && <p>{commentText}</p>}
                </div>
            </div>
        </div>
    )



    return formatted
}

export default CommentListItem;