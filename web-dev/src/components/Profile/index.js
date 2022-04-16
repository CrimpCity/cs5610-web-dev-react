import React from "react"
import ProfileComponent from "./ProfileComponent.js"
import NavigationTopBar from "../NavigationTopBar/index.js";
import WatchedList from "../WatchedList/index.js"
import profile from "../data/profile.json"
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
                    <p className="fw-bold fs-4">My Account</p>
                    <ProfileComponent profile={profile} />
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">My List</p>
                    <WatchedList />
                </div>
            </div>

            <div className="wd-add-height-to-scroll"></div>
        </>
    );

}
export default ProfileScreen;


