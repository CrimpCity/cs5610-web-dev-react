import React from "react"
import UserDetails from "./UserDetails.js";
import Users from "../../components/data/Users.json";

const UsersList = () => {
    return (
        <>
            <ul className="list-group">
                {
                    Users.map((user, index) => {
                        return (UserDetails(user, index));
                    })
                }
            </ul>
        </>
    );

}
export default UsersList;