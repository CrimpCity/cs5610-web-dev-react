import { TOGGLE_BOOKMARK } from "../actions/bookmark-actions.js";
import { FIND_USER_BOOKMARKS } from "../actions/bookmark-actions.js";


const bookmarkReducer =
    (state = [], action) => {
        switch (action.type) {
            case FIND_USER_BOOKMARKS:
                return action.bookmarks;

            case TOGGLE_BOOKMARK:
                return action.bookmarks;

            default:
                return state;
        }
    };

export default bookmarkReducer;