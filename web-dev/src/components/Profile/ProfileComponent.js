import "./profile.css"
// import { Link } from "react-router-dom";


const ProfileComponent = (profile) => {
    const formatted = (
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
                        <div className="m-0 wd-profile-component-subtext">{profile.profile.username}</div>
                        <div className="m-0 pb-1 wd-profile-component-subtext">{profile.profile.email}</div>
                        <div className="badge bg-primary m-0 rounded-pill wd-profile-component-usertype">
                            {profile.profile.accountType}
                        </div>
                    </div>
                </div>
            </li>
        </>
    )

    return formatted
}

export default ProfileComponent;