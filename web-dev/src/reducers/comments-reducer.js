import { FIND_USER_COMMENTS } from "../actions/comments-actions.js";
import { UPDATE_COMMENT } from "../actions/comments-actions.js";
import { DELETE_COMMENT } from "../actions/comments-actions.js";

const commentsReducer =
    (state = [], action) => {
        switch (action.type) {
            case FIND_USER_COMMENTS:
                return action.comments;

            case UPDATE_COMMENT:
                // return state.map(comment => comment._id === action.comment._id ? action.comment.comment : comment.comment);
                return state.map(comment => comment._id === action.comment._id ? action.comment : comment);

            case DELETE_COMMENT:
                return state.filter(comment => comment._id !== action.comment);

            default:
                return state;
        }
    };

export default commentsReducer;