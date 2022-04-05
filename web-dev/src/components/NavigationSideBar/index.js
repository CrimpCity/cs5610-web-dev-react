import React from "react";
import { Link } from "react-router-dom";
import NavList from "./NavList.js";
import "../ExploreScreen/explore.css"


const NavigationSidebar = (active) => {
    return (
        <>
            <div className="list-group align-items-start">
                <Link to="/"
                    className="list-group-item list-group-item-action">
                    <i className="fab fa-twitter fa-1x fa-fw"></i>
                </Link>

                <NavList active={active} />

            </div>
            <div className="d-grid mt-2">
                <Link to="/tuiter/tweet"
                    className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </Link>
            </div>
        </>
    );
}

export default NavigationSidebar;