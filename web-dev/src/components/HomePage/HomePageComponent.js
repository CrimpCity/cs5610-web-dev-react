import { React, useState, useEffect, useCallback, useMemo } from "react";
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import BoxArtList from "../BoxArtList/index.js"
import * as moviesService from '../../services/movies-service.js';
import './home-page.css';



const HomePageComponent = () => {
    const [bookmarks, setBookmarks] = useState([]);
    // useMemo so that the IDs do not get initialized on every render
    const trendingIDs = useMemo(() => [
        "625c6a217cdc9b794203a8c9",
        "625c6a267cdc9b794203a8cb",
        "625c6a287cdc9b794203a8cd",
        "625c6a2a7cdc9b794203a8cf",
        "625c6a2c7cdc9b794203a8d1"], []);
    const topIDs = useMemo(() => [
        "625c71477cdc9b794203a8d4",
        "625c71507cdc9b794203a8d6",
        "625c71577cdc9b794203a8d8",
        "625c71627cdc9b794203a8da",
        "625c71677cdc9b794203a8dc"], []);

    // check if the user has an account
    const loggedInUser = "123";
    // const guest = "guest";
    const guest = "123";
    let IDs = trendingIDs;
    let trendingTitle = "Trending Now";
    // if the user has an account then show them specific movie suggestions
    if (loggedInUser !== guest) {
        IDs = topIDs;
        trendingTitle = "Top Picks For " + loggedInUser;
    }

    // Retrieve movies from the database
    const getMoviesByIDs = async (IDs) => {
        const promises = await IDs.map(async (mid) => (moviesService.findMovieById(mid)));
        const resolved = await Promise.all(promises);
        console.log("resolved");
        console.log(resolved);
        setBookmarks(resolved);
        return resolved;
    };

    // Need to useCallback so we don't get movies on each rendering
    const renderMovies = useCallback(
        () => {
            const movies = getMoviesByIDs(IDs);
            return movies;
        },
        [IDs]);


    // Don't get movies on each rendering
    useEffect(() => {
        let isMounted = true;
        renderMovies();
        return () => { isMounted = false; }
    }, [renderMovies]);

    console.log("Movies");
    console.log(bookmarks);

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
                <ul className="list-group wd-trending-bg-color">
                    <li className="list-group-item fw-bold fs-4">{trendingTitle}</li>
                </ul>
                <BoxArtList movies={bookmarks} />
            </div>

            <div className="wd-add-height-to-scroll">
            </div>
        </>

    )
    return (formatted);
}

export default HomePageComponent;



