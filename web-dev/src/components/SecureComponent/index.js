import { React } from "react";
import { useAuth } from "../../contexts/auth-context";


const SecureComponent = ({ children }) => {
    const { getUserData } = useAuth();
    if (!getUserData()) return null
    return (
        <>
            {children}
        </>
    );

}

export default SecureComponent;