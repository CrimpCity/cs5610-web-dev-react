import React from "react";
import {Navigate, useLocation, useSearchParams} from "react-router-dom";
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
  const location = useLocation();
  const [query] = useSearchParams();

  // Return the requested component
  if (!getUserData()) return children;

  let returnURL = "/";
  console.log(query.get('returnURL'))
  if (location.pathname === "/login" && query.get('returnURL')) returnURL = query.get('returnURL');
  else if (location.pathname === "/login" || location.pathname === "/registration") returnURL = "/profile";
  console.log(returnURL);
  return (<Navigate to={returnURL} replace={true} />)
};

export default UnauthenticatedLock;
