import "./profile.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const ProfileComponent = ({profile}) => {
    const dateJoined = profile.dateJoined.split('-')[0]
    const [edit, setEdit] = useState(false);
    let navigate = useNavigate();
    function handleEdit() {
        navigate('/profile/edit')
    }
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
                            <div className="badge bg-primary m-0 me-2 rounded-pill wd-profile-component-usertype">
                                Member
                            </div>
                        <span> since {dateJoined} </span>
                        </div>
                        <div className="mt-1 d-flex">
                            { profile.isCritic &&
                                <div className="badge bg-primary m-0 rounded-pill wd-profile-component-usertype">
                                    Critic
                                </div>
                            }
                            { profile.isAdmin &&
                                <div className="badge bg-primary ms-3 rounded-pill wd-profile-component-usertype">
                                    Admin
                                </div>
                            }
                        </div>
                    </div>
                    <div>
                        <button className="wd-profile-edit-button fs6"
                                type="button" onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                </div>
            </li>
        </>
    );

}

export default ProfileComponent;