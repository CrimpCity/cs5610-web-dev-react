import React, {useContext, useEffect, useState} from "react";
import {login as doLogin, logout as doLogout, user as loadUser} from "../services/auth-service";

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
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
   * @param username
   * @param password
   */
  const signIn = (username, password) => {
    return doLogin({username: username, password: password})
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
    return doLogout().finally(() => void setUserData(null));
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
    return loadUser.then(data => {
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

  const value = {signIn, signOut, getUserData, checkAuthenticationState, isAuthChecking};

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

  const {checkAuthenticationState} = useAuth();

  useEffect(() => {
    // TODO: implement Authentication check on first load or refresh the web app
    setFirstLoad(false)
  }, [])

  if (isFirstLoad) return (<h2>Loading...</h2>);
  else return children;
}

export const useAuth = () => useContext(AuthContext);
