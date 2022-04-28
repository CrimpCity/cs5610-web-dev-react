import React, {useEffect, useRef} from "react";
import "../LoginPage/login-page.css"
import {Link, useSearchParams} from "react-router-dom";
import LoginBackground from "../LoginPage/login-background.jpg";
import {useAuth} from "../../contexts/auth-context";
import UnauthenticatedLock from "../UnauthenticatedLock";

const RegistrationPage = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const {signUp} = useAuth();
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    useEffect(() => {
        if (email) emailRef.current.value = email;
    }, []);
    const handleSignup = event=> {
        signUp({
                    firstName: firstNameRef.current.value,
                    lastName: lastNameRef.current.value,
                    username: userNameRef.current.value,
                    emailOrNumber: emailRef.current.value,
                    password: passwordRef.current.value
                }
            ).catch(error => alert(error.data));
            event.preventDefault();
    }
    return (
        <UnauthenticatedLock>
            <div className="login-background flex-container"
                 style={{backgroundImage: `url(${LoginBackground})`}}>
                <div className="login-bring-it-forward">
                    <img className="login-logo-size" src={require('../LoginPage/netflicks-logo.png')} alt="Logo"/>
                    <div className="login-main-frame">
                        <div>
                            <div className="login-main-subframe">
                                <div className="registration-main">
                                    <h1 className="login-title">Create account with us!</h1>
                                    <form onSubmit={handleSignup}>
                                        {/*First Name*/}
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                    <label htmlFor="signup-first-name"
                                                           className="login-user-label-title text-white-50">
                                                        First Name
                                                    </label>
                                                    <input type="text"
                                                           ref={firstNameRef}
                                                           className="login-user-input text-white"
                                                           id="signup-first-name"
                                                           placeholder="First name"
                                                           required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/*Last Name*/}
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                    <label htmlFor="signup-last-name"
                                                           className="login-user-label-title text-white-50">
                                                        Last Name
                                                    </label>
                                                    <input type="text"
                                                           ref={lastNameRef}
                                                           className="login-user-input text-white"
                                                           id="signup-last-name"
                                                           placeholder="Last name"
                                                           required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/*Username*/}
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                    <label htmlFor="signup-username"
                                                           className="login-user-label-title text-white-50">
                                                        Username
                                                    </label>
                                                    <input type="text"
                                                           ref={userNameRef}
                                                           className="login-user-input text-white"
                                                           id="signup-username"
                                                           placeholder="Username"
                                                           required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/*Email or Phone Number*/}
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                    <label htmlFor="signup-user-input"
                                                           className="login-user-label-title text-white-50">
                                                        Email or phone number
                                                    </label>
                                                    <input type="text"
                                                           ref={emailRef}
                                                           className="login-user-input text-white"
                                                           id="signup-user-input"
                                                           placeholder="Email or phone number"
                                                           required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/*Password*/}
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                    <label htmlFor="signup-password"
                                                           className="login-user-label-title text-white-50">
                                                        Password
                                                    </label>
                                                    <input type="password"
                                                           ref={passwordRef}
                                                           className="login-user-input text-white"
                                                           id="signup-password"
                                                           placeholder="Password"
                                                           required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn login-button btn-submit btn-small"
                                                type="submit"
                                        > Sign Up
                                        </button>
                                        <div className="mt-3 mb-3">
                                            <Link to="/login"
                                                  className="login-registration-link text-white-50"
                                                  style={{fontSize: "15px"}}>
                                                Already have account?
                                                <span className="text-white fs-6 fw-bold"> Sign in here. </span>
                                            </Link>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <span className="text-white-50"> Or </span>
                                            <Link to="/homepage" className="login-registration-link">
                                                <span className="text-white fw-bold"> Guest </span>
                                            </Link>
                                            <span className="text-white-50">  for now. </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UnauthenticatedLock>
    );
};

export default RegistrationPage;