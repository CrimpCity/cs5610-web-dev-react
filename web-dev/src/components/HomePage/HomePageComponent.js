import React from "react";
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import './home-page.css';
import PosterList from "../PosterList/index.js"


const HomePageComponent = () => {
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

            <div >
                <PosterList />
            </div>
            <div className="wd-add-height-to-scroll">
                Top Genre
            </div>
            <div>
                Top Nationwide
            </div>
        </>

    )
    return (formatted);
}

export default HomePageComponent;



