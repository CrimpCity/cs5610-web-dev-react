import React from "react";
import "./landing-page.css"
import { Link } from "react-router-dom";
import LandingBackground from "./landing-background.jpg"

const landingRegistration = () => {
    return (
        <div className="landing-top-input-frame">
            <div>
                <textarea
                    placeholder="Email address"
                    className="mt-2 landing-emailAddress-input"
                />
            </div>
            <div>
                <Link to="/registration">
                    <button className="mt-2 landing-getStarted-button">
                        <span className="text-white">Get Started</span>
                        <i className="ps-3 fa-solid fa-chevron-right text-white fa-2xs"/>
                    </button>
                </Link>
            </div>
        </div>
    )}

const LandingPage = () => {
    return (
        <div>
            <div className="landing-split landing-background flex-container"
                style={{backgroundImage: `url(${LandingBackground})`}}>
                <div className="landing-bring-it-forward">
                    <img className="landing-logo-size" src={require('./netflicks-logo.png')} alt="Logo"/>
                    <Link to="/login">
                        <button className="landing-sign-in-button">
                            Sign In
                        </button>
                    </Link>
                    <div className="landing-welcome-text">
                        <h1 className="fw-bold">Unlimited movies, TV shows, and more.</h1>
                        <h2 style={{fontSize: "1.625rem"}}>
                            Watch anywhere. Cancel anytime.
                        </h2>
                        <h3 className="pt-4" style={{fontSize: "1.2rem"}}>
                            Ready to watch? Enter your email to create or restart your
                            membership.
                        </h3>
                        {landingRegistration()}
                        <Link to="/homepage" className="landing-guest-link">
                            <h3 className="pt-4 text-white" style={{fontSize: "1.5rem"}}>
                               You can also take a peek first! Become
                                {/*<span className="landing-guest-text"> Guest </span>*/}
                                <Link to="/homepage">
                                    <button className="mt-2 ms-3 me-3 landing-guest-button">
                                        <span className="text-white"> Guest</span>
                                        <i className="ps-3 fa-solid fa-chevron-right text-white fa-2xs"/>
                                    </button>
                                </Link>
                                for now.
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
            {/*Landing Feature 01*/}
            <div className="landing-features-frame landing-split">
                <div className="landing-features">
                    <div className="landing-features-text">
                        <h1 className="landing-features-title">
                            Enjoy on your TV.
                        </h1>
                        <h2 className="landing-features-subtitle">
                            Watch on Smart TVs, Playstation, Xbox, Chromecast,
                            Apple TV, Blu-ray players, and more.
                        </h2>
                    </div>
                    <div className="landing-features-media">
                        <div className="landing-features-media-frame">
                            <img className="landing-features-image"
                                src={require('./landing-enjoy-tv.png')}
                                 alt="landing-media-frame-1" />
                            <div className="landing-features-animation">
                                <video
                                    className="landing-features-animation-video"
                                    src={require('./landing-enjoy-tv.m4v')}
                                    type="video/mp4"
                                    alt="landing-media-content-1"
                                    playsInline autoPlay muted loop
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Landing Feature 01*/}

            {/*Landing Feature 02*/}
            <div className="landing-features-frame landing-split">
                <div className="landing-features switch">
                    <div className="landing-features-text section2">
                        <h1 className="landing-features-title">
                            Download your shows to watch offline.
                        </h1>
                        <h2 className="landing-features-subtitle">
                            Save your favorites easily and always have something to watch.
                        </h2>
                    </div>
                    <div className="landing-features-media section2">
                        <div className="landing-features-media-frame section2">
                            <img className="landing-features-image section2"
                                 src={require('./landing-watch-offline.jpg')}
                                 alt="landing-media-frame-2" />
                            <div className="landing-features-animation-section2">
                                <img className="landing-features-animation-image"
                                    src={require('./landing-watch-offline-boxshot.png')}
                                     alt="landing-media-content-2" />
                                <div className="landing-features-animation-text
                                                ps-3 pe-0 ">
                                    <div className="landing-text-0">
                                        Stranger Things</div>
                                    <div className="landing-text-1">
                                        Downloading...
                                    </div>
                                </div>
                                <img className="landing-features-animation-image "
                                     src={require('./landing-watch-offline-download.gif')}
                                     alt="landing-media-sub-content-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Landing Feature 02*/}

            {/*Landing Feature 03*/}
            <div className="landing-features-frame landing-split">
                <div className="landing-features">
                    <div className="landing-features-text">
                        <h1 className="landing-features-title">
                            Watch everywhere.
                        </h1>
                        <h2 className="landing-features-subtitle">
                            Stream unlimited movies and TV shows on your phone, tablet, laptop,
                            and TV without paying more.
                        </h2>
                    </div>
                    <div className="landing-features-media">
                        <div className="landing-features-media-frame">
                            <img className="landing-features-image"
                                 src={require('./landing-watch-everywhere.png')}
                                 alt="landing-media-frame-1" />
                            <div className="landing-features-animation-section3">
                                <video
                                    className="landing-features-animation-video"
                                    src={require('./landing-watch-everywhere.m4v')}
                                    type="video/mp4"
                                    alt="landing-media-content-1"
                                    playsInline autoPlay muted loop
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Landing Feature 03*/}

            {/*Landing Feature 04*/}
            <div className="landing-features-frame landing-split">
                <div className="landing-features switch">
                    <div className="landing-features-text section2">
                        <h1 className="landing-features-title">
                            Create profiles for kids.
                        </h1>
                        <h2 className="landing-features-subtitle">
                            Send kids on adventures with their favorite characters in a space made
                            just for them—free with your membership.
                        </h2>
                    </div>
                    <div className="landing-features-media section2">
                        <div className="landing-features-media-frame section2">
                            <img className="landing-features-image section2"
                                 src={require('./landing-kid-profile.png')}
                                 alt="landing-media-frame-2" />
                        </div>
                    </div>
                </div>
            </div>
            {/*Landing Feature 04*/}

            <div className="landing-faq-frame landing-split">
                <div className="landing-faq">
                    <h3 className="pt-4" style={{fontSize: "1.2rem"}}>
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </h3>
                    <div className="landing-ending-text">
                        {landingRegistration()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;