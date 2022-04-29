// THIS ISN'T WORKING
import * as userService from "../services/users-service.js"


export const FIND_USERS = "FIND_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";


export const findAllUsers = async (dispatch) => {
    const users = await userService.findAllUsers();
    dispatch({
        type: FIND_USERS,
        users: users
    });
}


export const updateUser = async (dispatch, cid, newUserInfo) => {
    const newUser = await userService.updateUser(cid, newUserInfo);
    dispatch({
        type: UPDATE_USER,
        users: newUser
    });
}


export const deleteUser = async (dispatch, uid) => {
    const response = await userService.deleteUser(uid);
    console.log("response");
    console.log(response);
    dispatch({
        type: DELETE_USER,
        uid
    });
}


// export const deleteUser = async (dispatch, username) => {
//     const response = await userService.deleteUsersByUsername(username);
//     dispatch({
//         type: DELETE_USER,
//         username
//     });
// }