import OtherCommented from "./OtherCommented.js";
import { React, useState, useEffect } from "react";
import { findAllCommentsByUser } from "../../services/comment-service.js"
import { findUserById } from "../../services/users-service.js"
import { useParams } from "react-router-dom";


const OtherProfileComments = () => {
    const [otherComments, setOtherComments] = useState([]);
    const [otherProfile, setOtherProfile] = useState([]);
    const { uid } = useParams()

    // update other user from the database only once
    useEffect(() => {
        findUserById(uid).then(result => setOtherProfile(result));
    }, []);

    console.log("index other profile get other user")
    console.log(otherProfile)
    // the otherProfile may be null
    // update other user's comments from the database only once
    useEffect(() => {
        if (otherProfile) { findAllCommentsByUser(uid).then(result => setOtherComments(result)); }
        else { return otherComments }

    }, []);

    function RenderComments() {
        if (!otherProfile) {
            // in case the other profile is null
            return (
                <li className="list-group-item" style={{ minWidth: "400px" }}>
                    This User Does Not Exist. Please ensure the userID is correct.
                </li>)
        }
        // If the other user is not a critic
        if (!otherProfile.isCritic) {
            return (
                <li className="list-group-item fw-bold fs-4">
                    {otherProfile.username} is not a Critic and cannot comment on any movies.
                </li>
            )
        }
        // If the other user is a critic but doesn't have any comments
        if (otherProfile.isCritic && otherComments.length === 0) {
            return (
                <li className="list-group-item fw-bold fs-4">
                    {otherProfile.username} does not have any comments to display.
                </li>
            )
        } else { return <OtherCommented commentList={otherComments} /> }
    }

    return (
        <>
            <ul className="list-group">
                <RenderComments />
            </ul>
        </>
    );

}
export default OtherProfileComments;