import React, {useEffect, useState} from "react"
import UserDetails from "./UserDetails.js";
import {useAuth} from "../../contexts/auth-context";


const UsersList = ({users}) => {
    const {getUserData} = useAuth();
    const currentUser = getUserData();
    return (
        <>
                {
                    users.map((user, index) => {
                        if (user.username !== currentUser.username) {
                            return (UserDetails(user, index));
                        }
                    })
                }
        </>
    );
}
export default UsersList;