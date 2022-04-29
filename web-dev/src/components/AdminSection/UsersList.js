import React, {useEffect, useState} from "react"
import UserDetails from "./UserDetails.js";
import {useAuth} from "../../contexts/auth-context";
import * as userServices from "../../services/users-service";


const UsersList = ({users}) => {
    const {getUserData} = useAuth();
    const currentUser = getUserData();
    // const [users, setUsers] = useState([]);
    // // // call the users service
    // // const findUsers = () => {
    // //     return userServices.findAllUsers();
    // // }
    // //
    // // // Retrieve the users from the database only once
    // // useEffect(() => {
    // //     findUsers().then(result => setUsers(result));
    // // }, []);
    //
    // // get all the users
    //
    //
    // // filter it first
    //
    // // map
    //
    // useEffect(() => {
    //
    //     userServices.findAllUsers().then(result => setUsers(result));
    //
    // });
    //
    //
    // const usersForDisplay = users.filter(user => user.username !== currentUser.username);
    //
    //
    //
    // return (
    //     <ul>
    //         {
    //             usersForDisplay.map((user, index) => UserDetails(user, index))
    //         }
    //
    //     </ul>
    //
    // );
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