import "./admin.css"
import React, {useState} from "react";

const UserDetails = (user, index) => {
    const [type, editType] = useState(false);
    const [critic, setCritic] = useState(user.isCritic);
    const [admin, setAdmin] = useState(user.isAdmin);
    return (
        <li className="list-group-item" style={{minWidth:"400px"}} key={index}>
            <div className="d-flex admin-frame">
                <div className="d-flex">
                    <div className="mt-1 pe-0 me-3">
                        <div className="position-relative">
                            <img src={user.profilePicture}
                                 className="mt-1 float-start admin-image"
                                 alt={user.userName}/>
                        </div>
                    </div>
                    <div className="d-flex admin-option-frame">
                        {!type &&
                            <>
                            <div className="d-flex admin-user-type">
                                <div className="form-check me-2">
                                    <input className="form-check-input" type="checkbox"
                                           value="" id="critic-check" checked={critic}
                                           readOnly/>
                                    <label className="form-check-label" htmlFor="critic-check">
                                        Critic
                                    </label>
                                </div>
                                <div className="form-check me-2">
                                    <input className="form-check-input" type="checkbox"
                                           value="" id="admin-check"
                                           checked={admin}
                                           readOnly/>
                                    <label className="form-check-label" htmlFor="admin-check">
                                        Admin
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex admin-edit-frame">
                                <button type="button" className="btn p-1 me-2 admin-change-button"
                                        title="Edit"
                                        onClick={() => editType(true)}>
                                    {/*<i className="fas fa-pen fa-xl"></i>*/}
                                    <i className="fa-solid fa-pen"></i>
                                </button>
                            </div>
                            </>
                        }

                        {type &&
                            <>
                            <div className="d-flex admin-user-type">
                                <div className="form-check me-2">
                                    <input className="form-check-input" type="checkbox"
                                           defaultChecked={critic}
                                           onChange={event => setCritic(event.target.checked)}
                                           value="" id="critic-check"/>
                                    <label className="form-check-label" htmlFor="critic-check">
                                        Critic
                                    </label>
                                </div>
                                <div className="form-check me-2">
                                    <input className="form-check-input" type="checkbox"
                                           defaultChecked={admin}
                                           onChange={event => setAdmin(event.target.checked)}
                                           value="" id="admin-check" />
                                    <label className="form-check-label" htmlFor="admin-check">
                                        Admin
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex admin-edit-frame edit-mode">
                                <button type="button" className="btn p-1 me-2 admin-change-button"
                                        title="save"
                                        onClick={() =>
                                            editType(false)
                                            // DO ALL THE DISPATCH HERE TO SEND TO THE USERS DATABASE.
                                }>
                                    <i className="fas fa-check"></i>
                                </button>
                                <button type="button" className="btn p-1 admin-cancel-button"
                                        title="cancel"
                                        onClick={
                                            () => {
                                                editType(false);
                                                setCritic(user.isCritic);
                                                setAdmin(user.isAdmin);
                                            }
                                }>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            </>
                        }

                    </div>
                </div>
                <div className="me-3 d-flex admin-info-frame">
                    <div className="admin-info">
                        <p className="m-0 admin-info-text mb-1 text-white-50">
                            <span className="fw-bold me-1 text-white">First Name: </span>
                            {user.firstName} </p>
                        <p className="m-0 admin-info-text text-white-50">
                            <span className="fw-bold me-1 text-white">Last Name: </span>
                            {user.lastName} </p>
                        <p className="m-0 admin-info-text text-white-50">
                            <span className="fw-bold me-1 text-white">Username: </span>
                            {user.username} </p>
                        <p className="m-0 admin-info-text text-white-50">
                            <span className="fw-bold me-1 text-white">Email or Number: </span>
                            {user.email} </p>
                    </div>

                    <button className="btn btn-submit btn-small admin-remove-button"
                        // onClick={}
                    > Remove
                    </button>

                </div>

            </div>
        </li>
    );
}

export default UserDetails;