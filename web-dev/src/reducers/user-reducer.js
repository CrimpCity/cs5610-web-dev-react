// THIS ISN'T WORKING
import { FIND_USERS } from "../actions/user-actions.js";
// import { UPDATE_USER } from "../actions/user-actions.js";
import { DELETE_USER } from "../actions/user-actions.js";



const userReducer = (state = [], action) => {
        switch (action.type) {
            case FIND_USERS:
                return action.users;

            // case UPDATE_USER:
            //     return state.map(user => user._id === action.user._id ? action.user : user);

            case DELETE_USER:
                return state.filter(user => user._id !== action.uid);

            default:
                return state;
        }
    };

export default userReducer;