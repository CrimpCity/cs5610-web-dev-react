import React from "react"
import UserProfileComponent from "./UserProfileComponent"
import NavigationTopBar from "../NavigationTopBar/index.js";
import ProfileComments from "../ProfileComments"
import profile from "../data/profile.json"

import {Link, useLocation} from "react-router-dom";
import "../Profile/profile.css"

const UserProfile = () => {
    const otherUser = useLocation().pathname.split(/[/:]+/)[2];
    return (
        <>
            <div className="d-flex bg-color"
                 style={{flexDirection:"column"}}>
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-top-profile wd-pad-siding ">
                    <div className="mb-2">
                        <span className="fw-bold fs-4">{otherUser}'s Account</span>

                    </div>
                    <UserProfileComponent profile={profile}/>
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">{otherUser}'s Comments</p>
                    <ProfileComments />
                </div>
            </div>

            <div className="wd-add-height-to-scroll"></div>
        </>
    );

}
export default UserProfile;


