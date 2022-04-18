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
    // const guest = "guest";
    const guest = "123";
    let movies = Trending;
    let trendingTitle = "Trending Now";
    if (loggedInUser !== guest) {
        movies = TopPicks;
        trendingTitle = "Top Picks For " + loggedInUser;
    }

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
                    <li className="list-group-item fw-bold fs-4">Trending Now (different on ~ every refresh)</li>
                </ul>
                <BoxArtList movies={TrendingJson} />
            </div>
            <div className="pb-3">
                <ul className="list-group wd-trending-bg-color">
                    <li className="list-group-item fw-bold fs-4">{loggedInUser}'s List (saved bookmarks)</li>
                </ul>
                <BoxArtList movies={TopPicksJson} />
            </div>

            <div className="wd-add-height-to-scroll">
            </div>
        </>

    )
    return (formatted);
}

export default HomePageComponent;



