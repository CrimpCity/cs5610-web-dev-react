import React from "react";
import { Link } from "react-router-dom";
// import NavList from "./NavList.js";
import "./navigation-top-bar.css"
import TransparentScroll from "./TransparentScroll.js";
import { useEffect } from 'react';


// TO DO:
// 1. Add active 
// 2. Make JSONable
// 3. Add Links


const NavigationTopBar = () => {
    // useEffect = async stuff [affect Dom, get data API]
    useEffect(TransparentScroll);

    const formatted = (<>
        <div className="container">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark"
                id="top-nav-bar">
                <div className="container align-items-center px-5 wd-max-width">
                    <Link to="/"
                        className="navbar-brand wd-fit">
                        <img src="/images/logo.png"
                            width="100%"
                            height="100%"
                            alt="netflicks logo">
                        </img>
                    </Link>

                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#midNavBar"
                        aria-controls="midNavBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse"
                        id="midNavBar">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="_blank">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="_blank">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="_blank">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="_blank">New & Popular</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="_blank">My List</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="_blank">Audio & Subtitles</a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <div className="mx-auto"></div>
                        <ul className="navbar-nav wd-inline">
                            <li className="nav-item">
                                <a className="nav-link" href="_blank">
                                    <i className="mx-2 fas fa-search"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="_blank">
                                    <i className="mx-2 fas fa-bell"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="ms-2 nav-link" href="_blank">Account</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>)


    return (formatted);

}

export default NavigationTopBar;
