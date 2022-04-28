import './home-page.css';
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import BoxArtList from "../BoxArtList/index.js"
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../contexts/auth-context";
import { findAllBookmarkedByUser } from "../../actions/bookmark-actions.js";
import * as moviesService from '../../services/movies-service.js';


const HomePageComponent = () => {
    const { getUserData } = useAuth();
    const currentUser = getUserData();
    const [trending, setTrending] = useState([]);
    const dispatch = useDispatch()
    const numMovies = 6;
    let isBooked = false;

    // set bookmarks from the redux state
    const bookmarks = useSelector(state => state.bookmarks);
    // update bookmarks once the state changes
    useEffect(() => findAllBookmarkedByUser(dispatch, currentUser.userID), [dispatch, currentUser.userID]);

    // Retrieve a random sample of movies from the database only once
    useEffect(() => {
        moviesService.getRandomMovies(numMovies)
            .then(result => setTrending(result));
    }, []);


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
            const moviePlaceholder = {
                movie: {
                    movieTitle: "N/A",
                    imdbID: "N/A",
                    moviePoster: "/images/movie_placeholder.png",
                    movieDescription: "N/A"
                }
            }
            const numMissing = Math.max(6 - bookmarks.length, 0);
            for (let i = 0; i < numMissing; i++) {
                bookmarks.push(moviePlaceholder);
            }
            // bookmarks should be at least 6 movies including fillers
            const bookmarksCount = Math.min(bookmarks.length, 6);
            const renderBookmarks = (
                <div className="pb-3">
                    <ul className="list-group wd-trending-bg-color px-3">
                        <li className="list-group-item fw-bold fs-4">{currentUser.username}'s Bookmarked Movies</li>
                    </ul>
                    <BoxArtList
                        movies={bookmarks.slice(0, bookmarksCount).map(mark => { return mark.movie; })}
                        isBooked={isBooked}
                        className="px-5" />
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
            <div className="p-5"></div>
        </>

    )
    return (formatted);
}

export default HomePageComponent;



