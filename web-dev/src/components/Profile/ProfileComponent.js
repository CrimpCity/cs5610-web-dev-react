import "./profile.css"
// import { Link } from "react-router-dom";


const ProfileComponent = (profile) => {
    const formatted = (
        <>
            <li className="list-group-item">
                <div className="row pb-3">
                    <div className="col-1 mt-1">
                        <img src={profile.profile.profilePicture} className="mt-1 float-start" width="100px"
                            height="100px" alt={profile.profile.firstName}></img>
                    </div>
                    <div className="col-11 mt-1">
                        <div className="d-flex justify-content-start">
                            <p className="m-0 ms-4 fs-6 fw-bold">{profile.profile.firstName} </p>
                            <p className="m-0 ms-4 fs-6 fw-bold">{profile.profile.lastName} </p>
                        </div>
                        <p className="m-0 ms-4 fs-6">{profile.profile.email}</p>
                    </div>
                    {/* <div className="col-6 mt-1"></div> */}
                </div>
            </li>
        </>
    )

    return formatted
}

export default ProfileComponent;