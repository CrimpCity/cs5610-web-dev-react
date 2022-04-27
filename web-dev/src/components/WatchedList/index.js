import React from "react"
import Watched from "./Watched.js";
import { useAuth } from "../../contexts/auth-context";
import { useState, useEffect } from "react";
import * as bookmarksService from '../../services/bookmarks-service.js';


const WatchedList = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const { getUserData } = useAuth();
    const currentUser = getUserData();

    // call the bookmarks service
    const findBookmarks = () => {
        return bookmarksService.findAllBookmarkedByUser(currentUser.userID);
    }

    // Retrieve the bookmarked movies from the database only once
    useEffect(() => {
        findBookmarks().then(result => setBookmarks(result));
    }, []);


    return (
        <>
            <ul className="list-group">
                <Watched movieList={bookmarks.map(mark => { return mark.movie; })} />
            </ul>
        </>
    );

}
export default WatchedList;