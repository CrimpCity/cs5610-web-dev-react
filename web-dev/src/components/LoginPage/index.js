import React, {useRef} from "react";
import "./login-page.css"
import {Link, useNavigate, useLocation, useSearchParams} from "react-router-dom";
import * as service from "../../services/auth-service";
import LoginBackground from "./login-background.jpg";
import {useAuth} from "../../contexts/auth-context";

const LoginPage = () => {
    const [navigateLink] = useSearchParams();
    const returnURL = navigateLink.get('returnURL');
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const {signIn} = useAuth()
    const handleSignin = async () => {
        try {
            const result = await signIn(
                emailRef.current.value,
                passwordRef.current.value
            )
            if (result) {
                if (returnURL) {
                    navigate(returnURL)
                }
                else {
                    navigate("/profile")
                }
            }
            else {
                alert('Invalid Username/Password.')
            }
        } catch (e) {
            alert('oops')
        }
    }
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
                                        {/*Email or Phone number*/}
                                        <div className="login-user-frame">
                                            <div className="position-relative">
                                                <div className="login-email-box">
                                                        <label htmlFor="login-user-input"
                                                               className="login-user-label-title text-white-50">
                                                            Email or phone number
                                                        </label>
                                                        <input type="text"
                                                               ref={emailRef}
                                                               className="login-user-input text-white"
                                                               id="login-user-input"
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
                                                    <label htmlFor="login-password"
                                                           className="login-user-label-title text-white-50">
                                                        Password
                                                    </label>
                                                    <input type="password"
                                                           ref={passwordRef}
                                                           autoComplete="on"
                                                           placeholder="Password"
                                                           className="login-user-input text-white"
                                                           id="login-password"
                                                           required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={handleSignin}
                                            className="btn login-button btn-submit btn-small"
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