
const profileReducer = (state = {}, action) => {
    switch(action.type) {
        case 'set-current-user':
            return action.mainUser;
        case 'edit-mode':
            return state;
        case 'updated-profile':
            console.log(action.updatedProfile);
            return action.updatedProfile;
        case 'edit-mode-off':
            return state;
        default:
            return state;
    }
}

export default profileReducer;