import React, {useEffect, useState, Component, useMemo, useCallback} from "react"
import ProfileComponent from "./ProfileComponent.js"
import NavigationTopBar from "../NavigationTopBar/index.js";
import WatchedList from "../WatchedList/index.js"
import ProfileComments from "../ProfileComments/index.js"
import "./profile.css"
import { useAuth } from "../../contexts/auth-context";
import AuthenticationLock from "../AuthenticationLock";
import AdminSection from "../AdminSection";
import {Provider, useDispatch, useSelector} from "react-redux";

const ProfileScreen = () => {
    const {signOut} = useAuth();
    const {getUserData} = useAuth();
    const currentUser= getUserData();
    const dispatch = useDispatch();

    /*
    * MAKE SURE you only give the data to the state ONCE!
     */
    const initializeData = () => {
        dispatch({type:'set-current-user', mainUser: currentUser});
        return 0;
    }
    const runOnlyOnce = useCallback(() => initializeData(), []);

    const correctProfile = useSelector(state => state.profile);

    return (

        <AuthenticationLock>
                <>
                <div className="d-flex bg-color"
                     style={{flexDirection: "column"}}>
                    <div>
                        <NavigationTopBar/>
                    </div>

                    <div className="wd-top-profile wd-pad-siding ">
                        <div className="d-flex wd-profile-title">
                            <div className="mb-2">
                                <span className="fw-bold fs-4">My Account</span>
                            </div>
                            {/* Log Out Button */}
                            <button type="button" className="wd-landing-sign-out-button fs-6"
                                    onClick={() => signOut()}>
                                Log Out
                            </button>

                        </div>
                        <ProfileComponent/>
                    </div>

                    <div className="mt-3 wd-pad-siding">
                        <p className="fw-bold fs-4">My List</p>
                        <WatchedList/>
                    </div>

                    <div className="mt-3 wd-pad-siding">
                        <p className="fw-bold fs-4">My Comments</p>
                        <ProfileComments/>
                    </div>

                    {correctProfile && correctProfile.isAdmin &&
                        <div className="mt-3 wd-pad-siding">
                            <p className="fw-bold fs-4">Users List</p>
                            <AdminSection/>
                        </div>
                    }
                </div>
                <div className="wd-add-height-to-scroll"></div>
                </>

        </AuthenticationLock>
    );

}
export default ProfileScreen;


