import UsersList from "./UsersList";
import UserDetails from "./UserDetails.js";
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import * as userServices from "../../services/users-service";
import { findAllUsers } from "../../actions/user-actions";
import { useAuth } from "../../contexts/auth-context";

const AdminSection = () => {
    const { getUserData } = useAuth();
    const currentUser = getUserData();
    const dispatch = useDispatch()

    // set comments from the redux state
    const users = useSelector(state => state.users);

    // update comments once the state changes
    // profile of current user will never be null so we don't need a conditional inside the useEffect
    useEffect(() => findAllUsers(dispatch), [dispatch]);
    console.log("users after find all");
    console.log(users, users.length);
    // remove current user
    users.splice(users.findIndex(function (item) {
        return item._id === currentUser.userID;
    }), 1);

    console.log("users after splice");
    console.log(users, users.length);

    return (
        <>
            <ul className="list-group">
                <UsersList users={users} />
            </ul>
        </>
    );

}
export default AdminSection;