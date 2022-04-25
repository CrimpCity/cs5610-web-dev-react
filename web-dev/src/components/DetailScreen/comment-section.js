import "./detail-screen.css";
import CommentItem from "./comment-item";
import React from "react";
import {useAuth} from "../../contexts/auth-context";

const CommentSection = () => {

  // TODO: retrieve comments from comment API
  const comments = [
    {
      username: "John",
      critic: true,
      comment: "John's comments",
      timestamp: "2022-04-10T21:30:00.000Z"
    },
    {
      username: "Critic",
      critic: false,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut urna sollicitudin, tristique lorem congue, molestie nisl. In blandit bibendum viverra. Cras eget tellus ac felis rutrum aliquet ut vitae.",
      timestamp: "2022-04-10T10:24:00.000Z"
    },
    {
      username: "Tony",
      critic: false,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum sagittis risus quis aliquam. Suspendisse.",
      timestamp: "2022-04-09T09:52:00.000Z"
    },
  ]

  const {getUserData} = useAuth();
  const currentUser = getUserData();

  return (
    <>
      <h4>Comments <span className="fs-5">({comments.length} comments)</span></h4>
      <div className="list-group mb-3">

        {/* Create comment block (Show for critic only) */}
        {currentUser.isCritic &&
          <div className="list-group-item p-3">
            <div className="row">
              <div className="col-auto">
                <div className="d-flex justify-content-center align-items-center comment-avatar-icon bg-dark">
                  <i className="fas fa-user fa-2x"></i>
                </div>
              </div>
              <div className="col">
            <textarea className="form-control"
                      rows={3}
                      placeholder="Add a comment..." onClick={event => {
              console.log("click")
            }}></textarea>
              </div>
            </div>
          </div>
        }

        {/* Comments block */}
        {comments.map(comment => (<CommentItem comment={comment} />))}

      </div>
    </>
  );
}

export default CommentSection;