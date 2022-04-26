import React from "react"
import UserProfileComponent from "./UserProfileComponent"
import NavigationTopBar from "../NavigationTopBar/index.js";
import ProfileComments from "../ProfileComments"
import profile from "../data/profile.json"

import {Link, useLocation, useParams} from "react-router-dom";
import "../Profile/profile.css"


const UserProfile = () => {
    const {username} = useParams();

    return (
        <>
            <div className="d-flex bg-color"
                 style={{flexDirection:"column"}}>
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-top-profile wd-pad-siding ">
                    <div className="mb-2">
                        <span className="fw-bold fs-4">{username}'s Account</span>

                    </div>
                    <UserProfileComponent profile={profile}/>
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">{username}'s Comments</p>
                    <ProfileComments />
                </div>
            </div>

            <div className="wd-add-height-to-scroll"></div>
        </>
    );

}
export default UserProfile;


