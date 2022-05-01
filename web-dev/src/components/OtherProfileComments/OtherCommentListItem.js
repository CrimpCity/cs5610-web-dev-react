import "./profile-comments.css"
import React from "react";
import {useNavigate} from "react-router-dom";


const OtherCommentListItem = (comment, index) => {
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
                    </h6>

                    {/* Movie Title */}
                    <p className="text-white fs-5 pt-3"
                    onClick = {()=> navigate(`/detail/${comment.movie.imdbID}`)}>
                        {comment.movie.movieTitle}
                    </p>
                    {/* Comment text */}
                    <p>{comment.comment}</p>
                </div>
            </div>
        </div>
    )

    return formatted
}

export default OtherCommentListItem;