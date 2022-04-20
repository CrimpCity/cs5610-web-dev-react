import {useState} from "react";
import {Link} from "react-router-dom";

const CommentItem = ({comment = {}}) => {

  const user = "Potter";
  let [editing, setEditing] = useState(false);
  const [commentText, sentCommentText] = useState(comment.comment);
  const timestamp = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(new Date(comment.timestamp));

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
              {user === comment.username && <span className="badge fs-6 fw-bold bg-dark">You</span>}

              {/* Normal user */}
              {user !== comment.username &&
                <Link to={"/profile/"+comment.username} className="text-decoration-none text-white">
                  {comment.username}

                  {/* For critic type user */}
                  {comment.critic &&
                    <span className="badge bg-primary ms-2 rounded-pill">Critic</span>}
                </Link>}

              {/* Comment timestamp */}
              <span className="text-dark fw-light ms-2">· {timestamp}</span>
            </div>

            {/* Allow edit/delete to current user's comments */}
            {user === comment.username &&
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
                  <>
                    <button type="button" className="btn p-1 me-2"
                            title="accept"
                            onClick={() => setEditing(false)}><i className="fas fa-check"></i></button>
                    <button type="button" className="btn p-1"
                            title="cancel"
                            onClick={() => {
                              setEditing(false);
                              sentCommentText(comment.comment);
                            }}>
                      <i className="fas fa-times"></i></button>
                  </>
                }
              </div>
            }
          </h6>

          {/* Comment edit box */}
          {editing && <textarea className="form-control"
                                rows={3} value={commentText}
                                placeholder="Add a comment..."
                                onChange={event => sentCommentText(event.target.value)} required></textarea>}

          {/* Comment text */}
          {!editing && <p>{commentText}</p>}
        </div>
      </div>
    </div>
  );
}

export default CommentItem;