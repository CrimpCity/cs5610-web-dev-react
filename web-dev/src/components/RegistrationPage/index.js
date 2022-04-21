import React from "react";
import "../LoginPage/login-page.css"
import { Link } from "react-router-dom";
import LoginBackground from "../LoginPage/login-background.jpg";

const RegistrationPage = () => {
    return (
        <div>
            <div className="login-background flex-container"
                 style={{backgroundImage: `url(${LoginBackground})`}}>
                <div className="login-bring-it-forward">
                    <img className="login-logo-size" src={require('../LoginPage/netflicks-logo.png')} alt="Logo"/>
                    <div className="login-main-frame">
                        <div>
                            <div className="login-main-subframe">
                                <div className="registration-main">
                                    <h1 className="login-title">Create account with us!</h1>
                                    <form>
                                        {/*First Name*/}
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                    <label htmlFor="login-user-input"
                                                           className="login-user-label-title text-white-50">
                                                        First Name
                                                    </label>
                                                    <input type="text"
                                                           className="login-user-input text-white"
                                                           id="login-user-input"
                                                           placeholder="First name"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/*Last Name*/}
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                    <label htmlFor="login-user-input"
                                                           className="login-user-label-title text-white-50">
                                                        Last Name
                                                    </label>
                                                    <input type="text"
                                                           className="login-user-input text-white"
                                                           id="login-user-input"
                                                           placeholder="Last name"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                        <label htmlFor="login-user-input"
                                                               className="login-user-label-title text-white-50">
                                                            Email or phone number
                                                        </label>
                                                        <input type="text"
                                                               className="login-user-input text-white"
                                                               id="login-user-input"
                                                               placeholder="Email or phone number"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                    <label htmlFor="login-user-input"
                                                           className="login-user-label-title text-white-50">
                                                        Password
                                                    </label>
                                                    <input type="password"
                                                           className="login-user-input text-white"
                                                           id="login-user-input"
                                                           placeholder="Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="/registration/select-avatar">
                                            <button className="btn login-button btn-submit btn-small"
                                                    type="submit">
                                                Sign Up
                                            </button>
                                        </Link>
                                        <div className="mt-3 mb-3">
                                            <Link to="/login"
                                                  className="login-registration-link text-white-50"
                                                  style={{fontSize: "15px"}}>
                                                Already have account?
                                                <span className="text-white fs-6"> Sign in here. </span>
                                            </Link>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <Link to="/homepage" className="login-registration-link text-white-50">
                                                Or
                                                <span className="text-white"> Guest </span> for now.
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;