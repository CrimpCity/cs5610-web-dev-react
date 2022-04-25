import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../contexts/auth-context";

/**
 * Put this over component that required unauthenticated access.
 * It will perform redirection to root "/" automatically.
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const UnauthenticatedLock = ({children}) => {
  const {getUserData} = useAuth();
  if (getUserData()) return (<Navigate to="/" replace={true} />)
  return (
    <>
      {children}
    </>
  );
};

export default UnauthenticatedLock;