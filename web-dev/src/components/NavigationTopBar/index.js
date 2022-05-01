import React from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import "./navigation-top-bar.css"
import TransparentScroll from "./TransparentScroll.js";
import {useEffect} from 'react';
import {useAuth} from "../../contexts/auth-context";

const NavigationTopBar = () => {
  // useEffect = async stuff [affect Dom, get data API]
  useEffect(TransparentScroll);

  const {getUserData} = useAuth();
  const currentUser = getUserData();
  const location = useLocation();

  return (
    <nav className="navbar fixed-top navbar-expand navbar-dark" id="top-nav-bar">
      <div className="container-fluid px-5">
        {/* Netflicks logo */}
        <Link to="/" className="navbar-brand wd-fit">
          <img src="/images/logo.png"
               width="100%"
               height="100%"
               alt="netflicks logo">
          </img>
        </Link>

        <div className="collapse navbar-collapse" id="midNavBar">
          {/* Home button (For guest/unauthenticated user */}
          <ul className="navbar-nav me-auto">
            {!currentUser && <li className="nav-item d-none d-sm-block">
              <NavLink className="nav-link" to="/homepage">Home</NavLink>
            </li>}
          </ul>

          <ul className="navbar-nav">
            {/* Search button */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                <i className="mx-2 fas fa-search"></i> Search
              </NavLink>
            </li>

            {/* Privacy Policy button */}
            <li className="nav-item">
              <NavLink className="ms-2 nav-link" to="/privacy">
                <i className="fas fa-user-secret"></i>
              </NavLink>
            </li>

            {/* Login / Account button */}
            {currentUser && <li className="nav-item">
              <NavLink className="ms-2 nav-link" to="/profile">{currentUser.username}</NavLink>
            </li>}
            {!currentUser && <li className="nav-item">
              <NavLink className="ms-2 nav-link" to={"/login?returnURL=" + location.pathname}>
                <button type="button" className="btn btn-danger">Sign in</button>
              </NavLink>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationTopBar;
