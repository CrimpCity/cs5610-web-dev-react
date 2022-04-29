import "../Profile/profile.css"
import React from "react";


const UserProfileComponent = ({ otherProfile }) => {
    let profileRendering = (
        <li className="list-group-item" style={{ minWidth: "400px" }}>
            This User Does Not Exist. Please ensure the userID is correct.
        </li>)

    // check if the other user exists
    if (otherProfile) {
        const dateJoined = new Date(otherProfile.dateJoined).getFullYear();
        profileRendering = (
            <div>
                <li className="list-group-item" style={{ minWidth: "400px" }}>
                    <div className="pb-3 d-flex">
                        <div className="mt-1">
                            <img src={otherProfile.avatarImage}
                                className="mt-1 float-start wd-profile-avatar" alt={otherProfile.username}></img>
                        </div>
                        <div className="mt-1 ms-4 d-flex" style={{ flexDirection: "column" }}>
                            <div className="m-0 fw-bold fs-5">
                                {otherProfile.firstName} {otherProfile.lastName} </div>
                            <div className="m-0 wd-profile-component-subtext">{otherProfile.username}</div>
                            {/* <div className="m-0 pb-1 wd-profile-component-subtext">{otherProfile.emailOrNumber}</div> */}
                            <div className="mb-2">
                                <div className="badge bg-primary m-0 me-3 fs-6 rounded-pill wd-profile-component-usertype">
                                    Member
                                </div>
                                <div className="badge bg-info m-0 me-2 fs-6 rounded-pill wd-profile-component-usertype">
                                    since {dateJoined}
                                </div>
                            </div>
                            <div className="mt-2 d-flex">
                                {otherProfile.isCritic &&
                                    <div className="badge bg-success m-0 rounded-pill fs-6 wd-profile-component-usertype">
                                        Critic
                                    </div>
                                }
                                {otherProfile.isAdmin &&
                                    <div className="badge bg-success ms-3 fs-6 rounded-pill wd-profile-component-usertype">
                                        Admin
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        )
    }

    return profileRendering;
}

export default UserProfileComponent;