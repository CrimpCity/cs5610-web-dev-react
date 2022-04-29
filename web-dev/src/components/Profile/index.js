import React from "react"
import ProfileComponent from "./ProfileComponent.js"
import NavigationTopBar from "../NavigationTopBar/index.js";
import WatchedList from "../WatchedList/index.js"
import ProfileComments from "../ProfileComments/index.js"
import "./profile.css"
import { useAuth } from "../../contexts/auth-context";
import AuthenticationLock from "../AuthenticationLock";
import AdminSection from "../AdminSection";

const ProfileScreen = () => {
<<<<<<< HEAD
    const { signOut } = useAuth();
    const { getUserData } = useAuth();
=======
    const { signOut, getUserData } = useAuth();
>>>>>>> 470e523de298b87a571e50d17f4fc2bd2d40f213
    const currentUser = getUserData();

    return (
        <AuthenticationLock>
<<<<<<< HEAD
            <>
                <div className="d-flex bg-color"
                    style={{ flexDirection: "column" }}>
                    <div>
                        <NavigationTopBar />
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
                        <ProfileComponent />
                    </div>

                    <div className="mt-3 wd-pad-siding">
                        <p className="fw-bold fs-4">My List</p>
                        <WatchedList />
                    </div>
=======
            <div className="d-flex bg-color"
                style={{ flexDirection: "column" }}>
                <div >
                    <NavigationTopBar />
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
                    <ProfileComponent />
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">My List</p>
                    <WatchedList />
                </div>
>>>>>>> 470e523de298b87a571e50d17f4fc2bd2d40f213

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">My Comments</p>
                    <ProfileComments />
                </div>

                {currentUser && currentUser.isAdmin &&
                    <div className="mt-3 wd-pad-siding">
<<<<<<< HEAD
                        <p className="fw-bold fs-4">My Comments</p>
                        <ProfileComments />
=======
                        <p className="fw-bold fs-4">Users List</p>
                        <AdminSection />
>>>>>>> 470e523de298b87a571e50d17f4fc2bd2d40f213
                    </div>
                }
            </div>

<<<<<<< HEAD
                    {currentUser && currentUser.isAdmin &&
                        <div className="mt-3 wd-pad-siding">
                            <p className="fw-bold fs-4">Users List</p>
                            <AdminSection />
                        </div>
                    }
                </div>
                <div className="wd-add-height-to-scroll"></div>
            </>

=======
            <div className="wd-add-height-to-scroll"></div>
>>>>>>> 470e523de298b87a571e50d17f4fc2bd2d40f213
        </AuthenticationLock>
    );

}
export default ProfileScreen;