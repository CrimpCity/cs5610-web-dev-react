import React, {useEffect, useState} from "react"
import UserDetails from "./UserDetails.js";
import * as userServices from "../../services/users-service";
import UsersList from "./UsersList";
// import Users from "../../components/data/Users.json";


const AdminSection = () => {
    const [users, setUsers] = useState([]);
    // call the users service
    const findUsers = () => {
        return userServices.findAllUsers();
    }

    // Retrieve the users from the database only once
    useEffect(() => {
        findUsers().then(result => setUsers(result));
    }, []);

    return (
        <>
            <ul className="list-group">
                <UsersList users={users}/>
            </ul>
        </>
    );

}
export default AdminSection;