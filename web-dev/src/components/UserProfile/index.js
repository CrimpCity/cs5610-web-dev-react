import React from "react"
import UserProfileComponent from "./UserProfileComponent"
import NavigationTopBar from "../NavigationTopBar/index.js";
import ProfileComments from "../ProfileComments"

import {Navigate, useParams} from "react-router-dom";
import "../Profile/profile.css"
import {useAuth} from "../../contexts/auth-context";
import AuthenticationLock from "../AuthenticationLock";


const UserProfile = () => {
    const {username} = useParams();
    const {getUserData} = useAuth();

    // Show redirect to the current user profile page if path username is the user's.
    if (getUserData().username === username) {
        return (<Navigate to="/profile" replace={true} />);
    }

    return (
        <AuthenticationLock>
            <div className="d-flex bg-color"
                 style={{flexDirection:"column"}}>
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-top-profile wd-pad-siding ">
                    <div className="mb-2">
                        <span className="fw-bold fs-4">{username}'s Account</span>

                    </div>
                    <UserProfileComponent/>
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">{username}'s Comments</p>
                    <ProfileComments />
                </div>
            </div>

            <div className="wd-add-height-to-scroll"></div>
        </AuthenticationLock>
    );

}
export default UserProfile;


