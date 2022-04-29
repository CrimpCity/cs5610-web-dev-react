import { React, useState, useEffect } from "react";
import UserProfileComponent from "./UserProfileComponent"
import NavigationTopBar from "../NavigationTopBar/index.js";
import OtherProfileComments from "../OtherProfileComments"

import { Navigate, useParams } from "react-router-dom";
import "../Profile/profile.css"
import { useAuth } from "../../contexts/auth-context";
import AuthenticationLock from "../AuthenticationLock";
import { findUserById } from "../../services/users-service.js"


const UserProfile = () => {
    // may need to add null check
    const { getUserData } = useAuth();
    const [otherProfile, setOtherProfile] = useState([]);
    const { uid } = useParams()

    // update other user from the database only once
    useEffect(() => {
        findUserById(uid).then(result => setOtherProfile(result));
    }, []);

    // Show redirect to the current user profile page if path username is the user's.
    if (getUserData().username === otherProfile.username) {
        return (<Navigate to="/profile" replace={true} />);
    }

    return (
        <AuthenticationLock>
            <div className="d-flex bg-color"
                style={{ flexDirection: "column" }}>
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-top-profile wd-pad-siding ">
                    <div className="mb-2">
                        <span className="fw-bold fs-4">{otherProfile.username}'s Account</span>

                    </div>
                    <UserProfileComponent otherProfile={otherProfile} />
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">{otherProfile.username}'s Comments</p>
                    <OtherProfileComments />
                </div>
            </div>

            <div className="wd-add-height-to-scroll"></div>
        </AuthenticationLock>
    );

}
export default UserProfile;