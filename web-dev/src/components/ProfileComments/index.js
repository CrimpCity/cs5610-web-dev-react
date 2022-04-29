import Commented from "./Commented.js";
import { useAuth } from "../../contexts/auth-context";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllCommentsByUser } from "../../actions/comments-actions.js";


const ProfileComments = () => {
    const { getUserData } = useAuth();
    const currentUser = getUserData();
    const dispatch = useDispatch()

    // set comments from the redux state
    const comments = useSelector(state => state.comments);

    // update comments once the state changes
    // profile of current user will never be null so we don't need a conditional inside the useEffect
    useEffect(() => findAllCommentsByUser(dispatch, currentUser.userID), [dispatch, currentUser.userID]);

    function RenderComments() {
        // Can admins also comment?
        if (!currentUser.isCritic) {
            return (
                <li className="list-group-item fw-bold fs-4">
                    Become a Critic today to be able to comment on movies and view them here!
                </li>
            )
        }

        if (currentUser.isCritic && comments.length === 0) {
            return (
                <li className="list-group-item fw-bold fs-4">
                    Comment on some movies to see them here!
                </li>
            )
        } else { return <Commented commentList={comments} /> }
    }

    return (
        <>
            <ul className="list-group">
                <RenderComments />
            </ul>
        </>
    );

}
export default ProfileComments;