import React from "react"
import Watched from "./Watched.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../contexts/auth-context";
import { findAllBookmarkedByUser } from "../../actions/bookmark-actions.js";


const WatchedList = () => {
    const { getUserData } = useAuth();
    const currentUser = getUserData();
    const dispatch = useDispatch()

    // set bookmarks from the redux state
    const bookmarks = useSelector(state => state.bookmarks);
    // update bookmarks once the state changes
    useEffect(() => findAllBookmarkedByUser(dispatch, currentUser.userID), [dispatch, currentUser.userID]);


    function RenderBookmarks() {
        if (bookmarks.length === 0) {
            return (
                <li className="list-group-item fw-bold fs-4">
                    Bookmark movies to see them here!
                </li>
            )
        } else { return <Watched movieList={bookmarks.map(mark => { return mark.movie; })} /> }
    }


    return (
        <>
            <ul className="list-group" style={{ minWidth: "400px" }}>
                <RenderBookmarks />
            </ul>
        </>
    );

}
export default WatchedList;