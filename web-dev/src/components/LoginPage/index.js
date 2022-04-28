import React, {useRef} from "react";
import "./login-page.css"
import {Link} from "react-router-dom";
import LoginBackground from "./login-background.jpg";
import {useAuth} from "../../contexts/auth-context";
import UnauthenticatedLock from "../UnauthenticatedLock";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {signIn} = useAuth()
  const handleSignin = event => {
    signIn(emailRef.current.value, passwordRef.current.value).catch(() => {
      alert("Invalid emailOrNumber/password");
    });
    event.preventDefault();
  }
  return (
    <UnauthenticatedLock>
      <div className="login-background flex-container"
           style={{backgroundImage: `url(${LoginBackground})`}}>
        <div className="login-bring-it-forward">
          <Link to="/"><img className="login-logo-size" src={require('./netflicks-logo.png')} alt="Logo" /></Link>
          <div className="login-main-frame">
            <div>
              <div className="login-main-subframe">
                <div className="login-main">
                  <h1 className="login-title">Sign In</h1>
                  <form onSubmit={handleSignin}>
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
                                 placeholder="Enter email or phone number"
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
                                 placeholder="Enter password"
                                 className="login-user-input text-white"
                                 id="login-password"
                                 required
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
    </UnauthenticatedLock>
  );
};

export default LoginPage;
