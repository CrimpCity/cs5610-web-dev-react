import React from "react";
import "./login-page.css"
import { Link } from "react-router-dom";
import LoginBackground from "./login-background.jpg";

const LoginPage = () => {
    return (
            <div className="login-background flex-container"
                 style={{backgroundImage: `url(${LoginBackground})`}}>
                <div className="login-bring-it-forward">
                    <img className="login-logo-size" src={require('./netflicks-logo.png')} alt="Logo"/>
                    <div className="login-main-frame">
                        <div>
                            <div className="login-main-subframe">
                                <div className="login-main">
                                    <h1 className="login-title">Sign In</h1>
                                    <form>
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
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn login-button btn-submit btn-small"
                                                type="submit">
                                            Sign In
                                        </button>
                                        <div className="mt-3 mb-3">
                                            <Link to="/registration" className="login-registration-link text-white-50">
                                                New to Netflicks?
                                                <span className="text-white"> Sign up now. </span>
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

    );
};

export default LoginPage;