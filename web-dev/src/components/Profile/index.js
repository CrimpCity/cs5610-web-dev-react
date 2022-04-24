import React from "react"
import ProfileComponent from "./ProfileComponent.js"
import NavigationTopBar from "../NavigationTopBar/index.js";
import WatchedList from "../WatchedList/index.js"
import ProfileComments from "../ProfileComments/index.js"

import profile from "../data/profile.json"

import { Link } from "react-router-dom";
import "./profile.css"
// import { useSelector } from "react-redux";

const ProfileScreen = () => {
    // const profile = useSelector(state => state.profile);
    // console.log(JSON.stringify(profile))

    return (
        <>
            <div className="row bg-color">
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-lower-profile wd-pad-siding">
                    <p className="fw-bold fs-4">My Account
                        {/* Log Out Button */}
                        {/* Need to log user out of their profile via authentication / React Context */}
                        <span className="ms-3">
                            <Link to="/login">
                                <button className="wd-landing-sign-out-button fs-6">
                                    Log Out
                                </button>
                            </Link>
                        </span>
                    </p>
                    <ProfileComponent profile={profile} />
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">My List</p>
                    <WatchedList />
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">My Comments</p>
                    <ProfileComments />
                </div>
            </div>

            <div className="wd-add-height-to-scroll"></div>
        </>
    );

}
export default ProfileScreen;


