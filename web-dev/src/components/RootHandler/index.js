import {useAuth} from "../../contexts/auth-context";
import {Navigate} from "react-router-dom";

/**
 * Decide the component to display at root "/"
 * @constructor
 */
const RootHandler = () => {
  const {getUserData} = useAuth();

  // Show landing page component if unauthenticated.
  if (!getUserData()) return (<Navigate to="/landingpage" replace={true}></Navigate>);

  // Show home page component if authenticated.
  return (<Navigate to="/homepage" replace={true}></Navigate>);
}

export default RootHandler;