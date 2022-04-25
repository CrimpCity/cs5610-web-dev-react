import { React, useState, useEffect, useCallback, useMemo } from "react";
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import BoxArtList from "../BoxArtList/index.js"

import * as moviesService from '../../services/movies-service.js';


import './home-page.css';


import Trending from "../data/Movie.json";
import TopPicks from "../data/TopPicks.json";

import TrendingJson from "../data/Movie.json";
import TopPicksJson from "../data/TopPicks.json";

const HomePageComponent = () => {
    const loggedInUser = "123";
    let isBooked = false;

    // change "123" to something else to make the logged in user a guest
    if (loggedInUser === "123") {
        console.log("This true the logged in user = 123")
        isBooked = true;
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
                <BoxArtList movies={TrendingJson} className="px-5" />
            </div>
            <div className="pb-3">
                <ul className="list-group wd-trending-bg-color px-3">
                    <li className="list-group-item fw-bold fs-4">{loggedInUser}'s List (saved bookmarks)</li>
                </ul>
                {/* If a user is logged in then show the movies in their bookmarked list as already bookmarked & dimmed out */}
                <BoxArtList movies={TopPicksJson} isBooked={isBooked} className="px-5" />
            </div>

            <div className="wd-add-height-to-scroll">
            </div>
        </>

    )
    return (formatted);
}

export default HomePageComponent;



