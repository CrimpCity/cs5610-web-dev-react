import React from "react";
// import { Link } from "react-router-dom";
// import NavList from "./NavList.js";
import "./home-banner.css"


const HomeBannerComponent = () => {
    return (
        <>
            <div className="position-relative">
                <img className="img-fluid" src="/images/dune.jpg" width="100%" height="100%" alt="dune" />
                <div
                    className="ms-1 wd-over-img-text-size wd-text-color-search position-absolute bottom-0 start-20 wd-font-weight-over-img">
                    Dune
                    <div className="m-2">
                        <button className="wd-play wd-button-size">
                            <div className="wd-container">
                                <i className="px-2 ms-3 fas fa-play wd-play-button-font-size"></i>
                                <span className="px-2 fs-6 wd-align-icon">Play</span>
                            </div>
                        </button>

                        <button className="wd-my-list wd-button-size">
                            <div className="wd-container">
                                <i className="px-2 ms-2 fas fa-info-circle wd-my-list-button-font-size"></i>
                                <span className="px-2 fs-6 wd-align-icon">My List</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeBannerComponent;