import "./profile.css"
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/auth-context";

import React from "react";

const ProfileComponent = () => {
    const {getUserData} = useAuth();
    const profile= getUserData();
    const dateJoined = new Date(profile.dateJoined).getFullYear();
    return (
        <>
            <li className="list-group-item" style={{minWidth:"400px"}}>
                <div className="pb-3 d-flex">
                    <div className="mt-1">
                        <img src={profile.avatarImage}
                             className="mt-1 float-start wd-profile-avatar"  alt={profile.username}></img>
                    </div>
                    <div className="mt-1 ms-4 d-flex" style={{flexDirection:"column"}}>
                        <div className="m-0 fw-bold fs-5">
                            {profile.firstName} {profile.lastName} </div>
                        <div className="m-0 wd-profile-component-subtext">{profile.username}</div>
                        <div className="m-0 pb-1 wd-profile-component-subtext">{profile.emailOrNumber}</div>
                        <div className="mb-2">
                            <div className="badge bg-primary m-0 me-3 fs-6 rounded-pill wd-profile-component-usertype">
                                Member
                            </div>
                            <div className="badge bg-info m-0 me-2 fs-6 rounded-pill wd-profile-component-usertype">
                                since {dateJoined}
                            </div>
                        </div>
                        <div className="mt-2 d-flex">
                            {profile.isCritic &&
                                <div className="badge bg-success m-0 rounded-pill fs-6 wd-profile-component-usertype">
                                    Critic
                                </div>
                            }
                            {profile.isAdmin &&
                                <div className="badge bg-success ms-3 fs-6 rounded-pill wd-profile-component-usertype">
                                    Admin
                                </div>
                            }
                        </div>
                    </div>
                    <div>

                        <Link to="/edit-profile">
                            <button type="button" title="edit"
                                    className="wd-profile-edit-button fs-6 ">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </li>



        </div>


    );

}

export default ProfileComponent;