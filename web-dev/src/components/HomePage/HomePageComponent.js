import { React, useState, useEffect, useCallback } from "react";
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import BoxArtList from "../BoxArtList/index.js"
import * as bookmarksService from '../../services/bookmarks-service.js';
import { useAuth } from "../../contexts/auth-context";
import GetMovies from "./GetMovies.js"
import './home-page.css';



const HomePageComponent = () => {
    const { getUserData } = useAuth();
    const [bookmarks, setBookmarks] = useState([]);
    const [trending, setTrending] = useState([]);
    const [currentUser, setUser] = useState('');

    // A user must be logged in to see the bookmarks panel
    useEffect(() => {
        async function getUserProfile() {
            try {
                const currentUser = getUserData();
                setUser(currentUser);
            } catch (e) {
            };
        }
        getUserProfile();
    }, [getUserData]);

    // Retrieve a random sample of movies from the database only once
    useEffect(() => {
        GetMovies().then(result => setTrending(result));
    }, []);


    let isBooked = false;
    // Get the current logged in user's bookmarks
    const findBookmarks = useCallback(() => {
        if (currentUser && currentUser.userID) {
            return bookmarksService.findAllBookmarkedByUser(currentUser.userID)
                .then(bookmarks => setBookmarks(bookmarks))
        };
    }, [currentUser]);

    // Don't get bookmarks on each rendering
    useEffect(() => {
        let isMounted = true;
        findBookmarks()
        return () => { isMounted = false; }
    }, [findBookmarks]);


    function RenderBookmarks() {
        if (!currentUser) {
            // if a user is a guest then tell them to sign up to see bookmarks
            return (
                <li className="list-group-item fw-bold fs-4">
                    Sign up to see your bookmarked movies here!
                </li>
            )
            // if a logged in user has no bookmarks then tell them to add some
        } else if (bookmarks.length === 0) {
            return (
                <li className="list-group-item fw-bold fs-4">
                    Bookmark movies to see them here!
                </li>
            )
        }
        else {
            // If a user is logged in then 
            // show the movies in their bookmarked list 
            // as already bookmarked & dimmed out 

            isBooked = true;

            const renderBookmarks = (
                <div className="pb-3">
                    <ul className="list-group wd-trending-bg-color px-3">
                        <li className="list-group-item fw-bold fs-4">{currentUser.username}'s List (saved bookmarks)</li>
                    </ul>
                    <BoxArtList movies={bookmarks.map(mark => { return mark.movie; })} isBooked={isBooked} className="px-5" />
                </div>)
            return renderBookmarks
        };
    };


    const formatted = (
        <>
            <div className="row bg-color">
                <div >
                    <NavigationTopBar />
                </div>
                <div >
                    <HomeBannerComponent />
                </div>
            </div>

            <div className="pb-3">
                <ul className="list-group wd-trending-bg-color px-3">
                    <li className="list-group-item fw-bold fs-4">Trending Now (different on ~ every refresh)</li>
                </ul>
                <BoxArtList movies={trending} className="px-5" />
            </div>

            <RenderBookmarks />

            <div className="wd-add-height-to-scroll">
            </div>
        </>

    )
    return (formatted);
}

export default HomePageComponent;



