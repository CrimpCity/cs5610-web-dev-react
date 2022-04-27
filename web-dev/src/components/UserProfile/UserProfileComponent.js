import "../Profile/profile.css"

const UserProfileComponent = (profile) => {
    return (
        <>
            <li className="list-group-item" style={{minWidth:"400px"}}>
                <div className="pb-3 d-flex">
                    <div className="mt-1">
                        <img src={profile.profile.profilePicture}
                             className="mt-1 float-start wd-profile-avatar"  alt={profile.profile.firstName}></img>
                    </div>
                    <div className="mt-1 ms-4 d-flex" style={{flexDirection:"column"}}>
                        <div className="m-0 fw-bold fs-5">
                            {profile.profile.firstName} {profile.profile.lastName} </div>
                        {/*<div className="m-0 mb-2 wd-profile-component-subtext">{profile.profile.username}</div>*/}
                        <div className="d-flex">
                            { profile.profile.isCritic &&
                                <div className="badge bg-primary m-0 rounded-pill wd-profile-component-usertype">
                                    Critic
                                </div>
                            }
                            {/*{ profile.profile.isAdmin &&*/}
                            {/*    <div className="badge bg-primary ms-3 rounded-pill wd-profile-component-usertype">*/}
                            {/*        Admin*/}
                            {/*    </div>*/}
                            {/*}*/}
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default UserProfileComponent;