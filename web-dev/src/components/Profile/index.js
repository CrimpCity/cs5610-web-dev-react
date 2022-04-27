import React from "react"
import ProfileComponent from "./ProfileComponent.js"
import NavigationTopBar from "../NavigationTopBar/index.js";
import WatchedList from "../WatchedList/index.js"
import ProfileComments from "../ProfileComments/index.js"
import "./profile.css"
import UnauthenticatedLock from "../UnauthenticatedLock";
import { useAuth } from "../../contexts/auth-context";
import AuthenticationLock from "../AuthenticationLock";
import {useComments} from "../DetailScreen/comment-section";
// import { useSelector } from "react-redux";

const ProfileScreen = () => {
    // const profile = useSelector(state => state.profile);
    // console.log(JSON.stringify(profile))
    const {signOut, getUserData} = useAuth();
    // const {getUserData} = useAuth();
    const currentUser = getUserData();
    console.log(currentUser);
    /*
    * Step 1: I extract the username from the links using useSearchParams()
    * WE only carry on if the extracted result is NOT null.
    * Step 2: Get the information of current user in the context
    * const {getUserData} = useAuth();
    * const currentUser = getUserData();
    * Step 3: If (extractedUsername != currentUser.username)
    * Go to profile/:username=extractedUsername
    * */



    return (
        <AuthenticationLock>
            <div className="d-flex bg-color"
                style={{ flexDirection: "column" }}>
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-top-profile wd-pad-siding">
                    <div className="mb-2 wd-profile-my-account-line">
                        <span className="fw-bold fs-4">My Account</span>
                        {/* Log Out Button */}
                        <span className="ms-3">
                            <button type="button" className="wd-landing-sign-out-button fs-6" onClick={() => signOut()}>
                                Log Out
                            </button>
                        </span>
                    </div>
                    <ProfileComponent profile={currentUser}/>
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
        </AuthenticationLock>
    );

}
export default ProfileScreen;


