import React from "react";
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import BoxArtList from "../BoxArtList/index.js"
import './home-page.css';


import Trending from "../data/Movie.json";
import TopPicks from "../data/TopPicks.json";

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
                    <li className="list-group-item fw-bold fs-4">Trending Now</li>
                </ul>
                <BoxArtList movies={Trending} />
            </div>
            <div className="pb-3">
                <ul className="list-group wd-trending-bg-color">
                    <li className="list-group-item fw-bold fs-4">Top Picks For User: {loggedInUser}</li>
                </ul>
                <BoxArtList movies={TopPicks} />
            </div>

            {/* <div className="pb-3">
                <ul className="list-group wd-trending-bg-color">
                    <li className="list-group-item fw-bold fs-4">{trendingTitle}</li>
                </ul>
                <BoxArtList movies={movies} />
            </div> */}


            <div className="wd-add-height-to-scroll">
            </div>
        </>

    )
    return (formatted);
}

export default HomePageComponent;



