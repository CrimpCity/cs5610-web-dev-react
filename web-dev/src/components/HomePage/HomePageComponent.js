import React from "react";
import HomeBannerComponent from "../HomeBanner/HomeBannerComponent.js";
import NavigationTopBar from "../NavigationTopBar/index.js";
import BoxArtList from "../BoxArtList/index.js"
import './home-page.css';

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
                <BoxArtList />
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



