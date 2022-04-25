import React from "react"
import ProfileComponent from "../Profile/ProfileComponent"
import NavigationTopBar from "../NavigationTopBar";
import profile from "./admin-profile.json"
import { Link } from "react-router-dom";
import "../Profile/profile.css"
import UsersList from "./UsersList";

const AdminPage = () => {

    return (
        <>
            <div className="d-flex bg-color"
                 style={{flexDirection:"column"}}>
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-top-profile wd-pad-siding ">
                    <div className="mb-2">
                        <span className="fw-bold fs-4">My Account</span>
                        {/* Log Out Button */}
                        {/* Need to log user out of their profile via authentication / React Context */}
                        <span className="ms-3">
                            <Link to="/login">
                                <button className="wd-landing-sign-out-button fs-6">
                                    Log Out
                                </button>
                            </Link>
                        </span>
                    </div>
                    <ProfileComponent profile={profile}/>
                </div>

                <div className="mt-3 wd-pad-siding">
                    <p className="fw-bold fs-4">Users List</p>
                    <UsersList />
                </div>

            </div>

            <div className="wd-add-height-to-scroll"></div>
        </>
    );

}
export default AdminPage;


