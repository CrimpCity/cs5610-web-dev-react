import {Navigate, useLocation} from "react-router-dom";
import React from "react";
import {useAuth} from "../../contexts/auth-context";

/**
 * Put this over component that required authentication to automatically
 * redirect unauthenticated user to login page
 * with return URL automatically inserted.
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const AuthenticationLock = ({children}) => {
  const {getUserData} = useAuth();
  const location = useLocation();
  const returnURL = "/login?returnURL=" + location.pathname;
  if (!getUserData()) return (<Navigate to={returnURL} replace={true} />)
  return (
    <>
      {children}
    </>
  );
};

export default AuthenticationLock;