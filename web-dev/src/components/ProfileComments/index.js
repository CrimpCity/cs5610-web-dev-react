import React from "react"
import Commented from "./Commented.js";
import { useAuth } from "../../contexts/auth-context";
import { useState, useEffect } from "react";
import * as commentServices from '../../services/comment-service.js';


const ProfileComments = () => {
    const [comments, setComments] = useState([]);
    const { getUserData } = useAuth();
    const currentUser = getUserData();

    // call the comments service
    const findComments = () => {
        return commentServices.findAllCommentsByUser(currentUser.userID);
    }

    // Retrieve the commented movies from the database only once
    useEffect(() => {
        findComments().then(result => setComments(result));
    }, []);

    console.log("comments");
    console.log(comments);
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