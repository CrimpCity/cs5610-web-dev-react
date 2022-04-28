import React, {useState} from "react";
import "../LoginPage/login-page.css"
import "./profile.css"
import '../../vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import LoginBackground from "../LoginPage/login-background.jpg";
import avatarList from "../data/avatars.json";
import { useAuth } from "../../contexts/auth-context";
import AuthenticationLock from "../AuthenticationLock";
import profile from "./index";
import * as userServices from "../../services/users-service";
import {useDispatch, useSelector} from "react-redux";
import {updateUser} from "../../services/users-service";

const EditProfile = () => {
    //Get Current User whose profile is being editted
    const currentUser = useSelector(state => state.profileReducer);
    const [profile, setProfile] = useState(currentUser);
    //Set States to monitor profile changes
    const [imageChoice, setImageChoice] = useState(profile.avatarImage);
    const [newFirstName, setFirstName] = useState(profile.firstName);
    const [newLastName, setLastName] = useState(profile.lastName);
    //Load Navigate to handle cancel/save buttons
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleClickandSave =() => {
        dispatch({type: 'edit-mode-off'});
        navigate('/profile');
    }

    return (
        <AuthenticationLock>
            <div>
                <div className="avatar-background flex-container"
                     style={{backgroundImage: `url(${LoginBackground})`}}>
                    <div className="avatar-bring-it-forward">
                        <img className="login-logo-size" src={require('../LoginPage/netflicks-logo.png')} alt="Logo"/>
                        <button className="avatar-save-button "
                                onClick ={() => {
                                    const updatedUser = {...currentUser,
                                                            firstName: newFirstName,
                                                            lastName: newLastName,
                                                            avatarImage: imageChoice};
                                    // console.log(updatedUser);
                                    userServices.updateUser(currentUser.userID, updatedUser);
                                    dispatch({type: 'updated-profile', updatedProfile: profile});
                                    handleClickandSave();
                                    // alert('Your Profile was Updated!')
                                }}>
                            SAVE
                        </button>
                        <button className="avatar-cancel-button" onClick={handleClickandSave} >
                            CANCEL
                        </button>

                    </div>
                    <div className="avatar-frame">
                        <div className="avatar-list-frame">
                            <h1 className="avatar-list-title ms-2 ps-3 text-white-50">
                                Profile Settings
                            </h1>
                            {/*First Name*/}
                            <div className="ms-2 ps-3 edit-user-frame">
                                <div className="position-relative">
                                    <div className="login-email-box">
                                        <label htmlFor="signup-first-name"
                                               className="login-user-label-title text-white-50">
                                            First Name
                                        </label>
                                        <input type="text"
                                               // ref={firstNameRef}
                                               className="edit-user-input text-white"
                                               id="signup-first-name"
                                               placeholder="Change First name"
                                               onChange = {(event) => {
                                                   setFirstName(event.target.value);
                                                   setProfile({...profile, firstName: event.target.value});
                                               }
                                                   }
                                               required
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*Last Name*/}
                            <div className="ms-2 ps-3 edit-user-frame">
                                <div className="position-relative">
                                    <div className="login-email-box">
                                        <label htmlFor="signup-last-name"
                                               className="login-user-label-title text-white-50">
                                            Last Name
                                        </label>
                                        <input type="text"
                                               // ref={lastNameRef}
                                               className="edit-user-input text-white"
                                               id="signup-last-name"
                                               placeholder="Change Last name"
                                               onChange = {(event) => {
                                                   setLastName(event.target.value);
                                                   setProfile({...profile, lastName: event.target.value});
                                               }
                                               }
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className="ms-2 ps-3 pe-3 me-2 fs-4 text-white-50">
                                Hate Your Current Profile Avatar?
                            </h3>
                            <h3 className="ms-2 ps-3 fs-5">
                                Select One Below To Change!
                            </h3>
                            <div className="d-flex avatar-direction">
                            {avatarList.map(avatar => {
                                const avatarAlt = "avatar-" + avatar._id;
                                return (
                                    <div className="avatar-images-frame">
                                        <div className="ms-3 me-3">
                                            <img className="avatar-single-image-frame"
                                                 src={avatar['image-link']} alt={avatarAlt}/>
                                        </div>
                                        <h5 className="ps-3 pe-3 avatar-title text-white-50 "> {avatar.title}</h5>
                                        {imageChoice === avatar['image-link'] &&
                                            <div className="ps-3 pe-3 form-check avatar-select-button-frame">
                                                <input
                                                       type="radio"
                                                       name="avatarImage"
                                                       id="flexRadioDefault2"
                                                       defaultChecked/>
                                            </div>
                                        }
                                        {imageChoice !== avatar['image-link'] &&
                                            <div className="ps-3 pe-3 form-check avatar-select-button-frame">
                                                <input
                                                       type="radio"
                                                       id="flexRadioDefault2"
                                                       name="avatarImage"
                                                       onClick = {() => {
                                                           setImageChoice(avatar['image-link']);
                                                           setProfile({...profile, avatarImage: avatar['image-link']});
                                                       }}
                                              />
                                            </div>
                                        }
                                    </div>

                                );
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </AuthenticationLock>
    )
};

export default EditProfile;