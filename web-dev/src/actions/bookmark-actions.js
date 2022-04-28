import * as bookmarksService from "../services/bookmarks-service.js"


export const TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK";
export const FIND_USER_BOOKMARKS = "FIND_USER_BOOKMARKS";


export const toggleBookmark = async (dispatch, uid, mid) => {
    const toggle = await bookmarksService.userTogglesBookmark(uid, mid);
    const bookmarks = await bookmarksService.findAllBookmarkedByUser(uid);
    dispatch({
        type: TOGGLE_BOOKMARK,
        bookmarks: bookmarks
    });
}

export const findAllBookmarkedByUser = async (dispatch, uid) => {
    const bookmarks = await bookmarksService.findAllBookmarkedByUser(uid);
    dispatch({
        type: FIND_USER_BOOKMARKS,
        bookmarks: bookmarks
    });
}