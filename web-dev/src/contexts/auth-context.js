import React, {useContext, useEffect, useState} from "react";
import {signIn as doSignIn, signOut as doSignOut, profile as loadUser, signUp as doSignUp} from "../services/auth-service";

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [profile, setProfile] = useState()

  // You can set environment variable "TEST_USER_TYPE" during dev for testing different user type
  // null mean not login
  // for login user, data should be {"username": string, "avatarImage": string, "isCritic": boolean, "isAdmin": boolean}
  const sampleType = process.env.REACT_APP_TEST_USER_TYPE;
  let userInfo;
  if (sampleType) {
    if (sampleType === 'admin') userInfo = {username: "Admin", isCritic: false, isAdmin: true};
    else if (sampleType === 'critic') userInfo = {username: "Critic", isCritic: true, isAdmin: false};
    else if (sampleType === 'normal') userInfo = {username: "Normal", isCritic: false, isAdmin: false};
  } else userInfo = null;

  const [userData, setUserData] = useState(userInfo);
  const [isAuthStatusChecking, setIsAuthStatusChecking] = useState(false);

  /**
   * Sign in with the service.
   * Return true if authenticate successfully; otherwise, false.
   *
   * @param emailOrNumber
   * @param password
   */
  const signIn = (emailOrNumber, password) => {
    return doSignIn({emailOrNumber: emailOrNumber, password: password})
      .then(value => {
        // Store user data if authenticate successfully.
        setUserData(value);
        return true;
      })
      .catch(() => {
        // Invalidate current user data immediately if fail to sign for any reason.
        setUserData(null);
        return false;
      });
  }

  /**
   * Sign out of the service.
   */
  const signOut = () => {
    // Invalidate current user data
    return doSignOut().finally(() => void setUserData(null));
  }

  /**
   * Sign up.
   *
   * It takes newProfile with the following structure:
   * {
   *   firstName: string,
   *   lastName: string,
   *   username: string (required),
   *   emailOrNumber: string (required),
   *   password: string (required)
   * }
   *
   * Return status 200 with the new user profile.
   * Return status 400 with error message.
   * *** Use the error message to alert the user.
   *
   * @param newProfile
   * @returns {Promise<AxiosResponse<any>>}
   */
  const signUp = (newProfile) => {
    return doSignUp(newProfile).then(response => {
      setUserData(response.data);
      return response;
    });
  }

  /**
   * Load user data stored in local memory.
   * Return user data if authenticated.
   * Otherwise, return null.
   */
  const getUserData = () => {
    return userData;
  }

  /**
   * Warning don't run this method unless the server is connected and back-end authentication is implemented.
   *
   * Perform authentication state check with server and update user data in local memory.
   * Return user data if authenticated.
   * Otherwise, return null.
   */
  const checkAuthenticationState = () => {
    setIsAuthStatusChecking(true);
    return loadUser().then(data => {
      setUserData(data);
      setIsAuthStatusChecking(false);
    });
  }

  /**
   * Return true if currently check/load for authentication status; otherwise, false.
   *
   * Can be used with animating authentication loading status.
   *
   * @returns {boolean}
   */
  const isAuthChecking = () => isAuthStatusChecking;

  const value = {signIn, signOut, signUp, getUserData, checkAuthenticationState, isAuthChecking};

  return (
    <AuthContext.Provider value={value}>
      <PrelimAuth>
        {children}
      </PrelimAuth>
    </AuthContext.Provider>
  );
};

const PrelimAuth = ({children}) => {

  const [isFirstLoad, setFirstLoad] = useState(true);

  const {checkAuthenticationState, isAuthChecking} = useAuth();

  const AuthLoadingBox = () => (
    <div className="vh-100 d-flex">
      <div className="m-auto">
        <h4 className="text-center mb-4">Loading Netflicks...</h4>
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin-pulse fa-10x"></i>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    checkAuthenticationState().finally(() => void setFirstLoad(false));
  }, [])

  if (isFirstLoad && isAuthChecking) return (<AuthLoadingBox />);
  else return children;
}

export const useAuth = () => useContext(AuthContext);
