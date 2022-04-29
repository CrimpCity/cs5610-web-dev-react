import React, { useEffect} from "react"
import UsersList from "./UsersList";
import {useAuth} from "../../contexts/auth-context";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsers} from "../../actions/user-actions";


const AdminSection = () => {
    const {getUserData} = useAuth();
    const currentUser = getUserData();

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();


    // Get all the users

    useEffect(() => {
        findAllUsers(dispatch)
    }, [dispatch]);



   //Filter the current user out of the users list
    // An admin user cannot remove or edit the type of himself.

    function RenderUser () {
        const usersForDisplay = users.filter(user => user.username !== currentUser.username);
        return <UsersList users={usersForDisplay} />
    }


    return (
        <>
            <ul className="list-group">
                <RenderUser />
            </ul>
        </>
    );

}
export default AdminSection;