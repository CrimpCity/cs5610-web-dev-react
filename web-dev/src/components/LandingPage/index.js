import React, {useEffect, useState} from "react";
import "./landing-page.css"
import { Link } from "react-router-dom";
import LandingBackground from "./landing-background.jpg"
import UnauthenticatedLock from "../UnauthenticatedLock";

const LandingRegistration = () => {
    const [emailOrNumber, setEmailOrNumber] = useState('');
    const [signupURL, setSignupURL] = useState('/registration');
    useEffect(() => {
        if (emailOrNumber.trim() === '') setSignupURL('/registration');
        else setSignupURL(`/registration?email=${emailOrNumber}`);
    }, [emailOrNumber])
    return (
        <div className="d-flex w-100">
            <div className="flex-fill">
                <input type="text"
                    placeholder="Enter email address or number"
                    className="form-control py-4 rounded-0 border-0"
                    value={emailOrNumber}
                    onChange={event => void setEmailOrNumber(event.target.value)}
                />
            </div>
            <div className="flex-grow-0 flex-shrink-0">
                <Link to={signupURL}>
                    <button className="btn btn-danger rounded-0 py-4 border-0 border-white">
                        <span className="text-white">Get Started</span>
                        <i className="ps-3 fa-solid fa-chevron-right text-white fa-2xs"/>
                    </button>
                </Link>
            </div>
        </div>
    )}

const LandingPage = () => {
    return (
        <UnauthenticatedLock>
            <div className="landing-split landing-background"
                style={{backgroundImage: `url(${LandingBackground})`}}>
                <div className="landing-bring-it-forward">
                    <img className="landing-logo-size" src={require('./netflicks-logo.png')} alt="Logo"/>
                    <Link to="/login">
                        <button className="btn btn-danger float-end mt-4 me-5">
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
                        <LandingRegistration />
                        <h3 className="pt-3 text-white" style={{fontSize: "1.2rem"}}>
                           You can also take a peek first!
                        </h3>
                        <Link to="/homepage" className="landing-guest-link">
                            <button className="mt-2 ms-3 me-3 py-2 btn btn-danger rounded-0">
                                <span className="text-white fs-5">Guest For Now</span>
                                <i className="ps-3 fa-solid fa-chevron-right text-white fa-2xs"/>
                            </button>
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

            <div className="pt-4 pb-5 w-100">
                    <h5 className=" px-5 text-center">
                            Ready to watch? Enter your email to create or restart your
                            membership.
                    </h5>
                    <div className="row d-flex justify-content-center">
                        <div className="px-4 col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                            <LandingRegistration />
                        </div>
                    </div>
            </div>
        </UnauthenticatedLock>
    );
};

export default LandingPage;