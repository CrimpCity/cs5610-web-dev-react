import React from "react";
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import './home-page.css';



const HomePageComponent = () => {
    // bg-color-white
    const formatted = (
        <>
            <div className="row">
                <div >
                    <NavigationTopBar />
                </div>
                <div className="wd-add-height-to-scroll">
                    <HomeBannerComponent />
                </div>

            </div>

            <div>
                Daily Picks
            </div>
            <div>
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



