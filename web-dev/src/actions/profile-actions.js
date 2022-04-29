import * as userService from "../services/users-service.js"


export const FIND_CURRENT_USER = "FIND_CURRENT_USER";


export const findUserById = async (dispatch, uid) => {
    const profile = await userService.findUserById(uid).then(result => res.json(result));
    // console.log(profile);
    dispatch({
        type: FIND_CURRENT_USER,
        profile: profile
    });
}