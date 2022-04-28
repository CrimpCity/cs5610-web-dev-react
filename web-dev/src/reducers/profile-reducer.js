const profileReducer = (state = {}, action) => {
    switch(action.type) {
        // case ;
        case 'edit-mode':
            return state;
        case 'updated-profile':
            return action.updatedProfile;
        case 'edit-mode-off':
            return state;
        default:
            return state;
    }
}

export default profileReducer;