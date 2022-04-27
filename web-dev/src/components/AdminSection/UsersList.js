import React, {useEffect, useState} from "react"
import UserDetails from "./UserDetails.js";


const UsersList = ({users}) => {
    return (
        <>
                {
                    users.map((user, index) => {
                        return (UserDetails(user, index));
                    })
                }
        </>
    );

}
export default UsersList;