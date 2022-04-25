import "./admin.css"
import { React} from "react";

const UserDetails = (user, index) => {
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
                        <div className="d-flex admin-user-type">
                            <div className="form-check me-2">
                                <input className="form-check-input" type="checkbox"
                                       value="" id="flexCheckDefault" checked={user['accountType'] == 'Critic'}/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Critic
                                    </label>
                            </div>
                            <div className="form-check me-2">
                                <input className="form-check-input" type="checkbox"
                                       value="" id="flexCheckDefault" checked={user['accountType'] == 'Admin'}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Admin
                                </label>
                            </div>
                            <div className="form-check me-2">
                                <input className="form-check-input" type="checkbox"
                                       value="" id="flexCheckChecked" checked
                                       />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Normal
                                    </label>
                            </div>
                            {/*<div className="form-check">*/}
                            {/*    <input className="form-check-input" type="radio"*/}
                            {/*           name="flexRadioDefault"*/}
                            {/*           id="flexRadioDefault1"/>*/}
                            {/*        <label className="form-check-label" htmlFor="flexRadioDefault1">*/}
                            {/*            Admin*/}
                            {/*        </label>*/}
                            {/*</div>*/}
                            {/*<div className="form-check">*/}
                            {/*    <input className="form-check-input" type="radio"*/}
                            {/*           name="flexRadioDefault"*/}
                            {/*           id="flexRadioDefault2"*/}
                            {/*           checked/>*/}
                            {/*        <label className="form-check-label" htmlFor="flexRadioDefault2">*/}
                            {/*            Critic*/}
                            {/*        </label>*/}
                            {/*</div>*/}
                        </div>
                        <div className="mt-1 ps-0">
                            <button className="btn btn-submit btn-small admin-remove-button"
                                // onClick={}
                            > Remove
                            </button>
                        </div>
                    </div>
                </div>
                <div className="admin-info me-3">
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

            </div>
        </li>
    );
}

export default UserDetails;