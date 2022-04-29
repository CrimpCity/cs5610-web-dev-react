import * as userService from "../services/users-service.js"


export const FIND_USERS = "FIND_USERS";
export const DELETE_USER = "DELETE_USER";


export const findAllUsers = async (dispatch) => {
    const users = await userService.findAllUsers();
    dispatch({
        type: FIND_USERS,
        users: users
    });
}


export const deleteUser = async (dispatch, uid) => {
    const response = await userService.deleteUser(uid);
    dispatch({
        type: DELETE_USER,
        uid
    });
}

