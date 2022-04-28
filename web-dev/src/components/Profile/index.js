import React, {useState} from "react"
import ProfileComponent from "./ProfileComponent.js"
import NavigationTopBar from "../NavigationTopBar/index.js";
import WatchedList from "../WatchedList/index.js"
import ProfileComments from "../ProfileComments/index.js"
import "./profile.css"
import { useAuth } from "../../contexts/auth-context";
import AuthenticationLock from "../AuthenticationLock";
import AdminSection from "../AdminSection";
import {combineReducers, createStore} from "redux";
import {Provider, useSelector} from "react-redux";
import EditProfile from "./EditProfile";


const ProfileScreen = () => {
    const {signOut} = useAuth();
    const {getUserData} = useAuth();
    const currentUser= getUserData();
    const [profile, setProfile] = useState(currentUser);
    const [editProfile, setEditProfile] = useState(false);
    const profileReducer = (state = currentUser, action) => {
        switch(action.type) {
            case 'edit-mode':
                setEditProfile(true);
                return state;
            case 'updated-profile':
                setProfile(action.updatedProfile);
                return action.updatedProfile;
            case 'edit-mode-off':
                setEditProfile(false);
                return state;
            default:
                return state;
        }
    }
    const reducers = combineReducers({profileReducer});
    const store = createStore(reducers);
    return (
        <AuthenticationLock>
            <Provider store={store}>
                {!editProfile &&
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
                            <ProfileComponent profile={profile}/>
                        </div>

                        <div className="mt-3 wd-pad-siding">
                            <p className="fw-bold fs-4">My List</p>
                            <WatchedList/>
                        </div>

                        <div className="mt-3 wd-pad-siding">
                            <p className="fw-bold fs-4">My Comments</p>
                            <ProfileComments/>
                        </div>

                        {profile && profile.isAdmin &&
                            <div className="mt-3 wd-pad-siding">
                                <p className="fw-bold fs-4">Users List</p>
                                <AdminSection/>
                            </div>
                        }
                    </div>
                    <div className="wd-add-height-to-scroll"></div>
                    </>
                }
                {editProfile &&
                    <EditProfile />
                }
            </Provider>
        </AuthenticationLock>
    );

}
export default ProfileScreen;


