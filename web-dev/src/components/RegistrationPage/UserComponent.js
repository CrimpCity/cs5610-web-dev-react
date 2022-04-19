import React from "react";
import "../LoginPage/login-page.css"
import "./registration-page.css"
import '../../vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';
import { Link } from "react-router-dom";
import LoginBackground from "../LoginPage/login-background.jpg";
import avatarList from "./avatars.json";

const UserComponent = () => {
    return (
        <div>
            <div className="login-background flex-container"
                 style={{backgroundImage: `url(${LoginBackground})`}}>
                <div className="login-bring-it-forward">
                    <img className="login-logo-size" src={require('../LoginPage/netflicks-logo.png')} alt="Logo"/>
                </div>
                <div className="avatar-frame">
                    <div className="avatar-list-frame">
                        <h1 className="avatar-list-title ms-2 ps-3 text-white-50">
                            JUST ONE MORE STEP...
                        </h1>
                        <h3 className="ms-2 ps-3 pe-3 me-2 text-white-50">
                            Select Your Profile Avatar.
                        </h3>
                        <h3 className="ms-2 ps-3 fs-5">
                            Pick One Below!
                        </h3>

                        <div className="d-flex avatar-direction">
                        {avatarList.map(avatar => {
                            const avatarAlt = "avatar-" + avatar._id;
                            return (
                                <div className="avatar-images-frame">
                                    <h6 className="avatar-title text-white-50"> {avatar.title}</h6>
                                    <div className="ms-3 me-3">
                                        <img className="avatar-single-image-frame d-block"
                                             src={avatar['image-link']} alt={avatarAlt}/>
                                    </div>
                                    <button className="avatar-select-button">
                                        Select
                                    </button>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserComponent;