import "./watched-list.css"
import { React, useState } from "react";





const WatchedListItem = (movie, index) => {
    const [isWatched, setIsWatched] = useState(true);


    const formatted = (
        <li className="list-group-item" style={{minWidth:"400px"}} key={index}>
            <div className="d-flex wd-watchlist-frame">
                <div className="d-flex">
                <div className="mt-1 pe-0 me-3">

                    <div className="position-relative">
                        <img src={movie.movieImage}
                             className="mt-1 float-start wd-watchlist-image"
                             alt={movie.movieTitle}></img>
                        <div className="position-absolute top-0 wd-icon-position me-4">
                            <span onClick={() => setIsWatched(!isWatched)} className="wd-icon-color-not-watched">
                                {isWatched ? <i className="fas fa-bookmark"></i>
                                    : <i className="far fa-bookmark"></i>}
                            </span>

                        </div>
                    </div>


                </div>
                <div className="wd-watchlist-info mt-1 me-3">
                    <p className="m-0 fs-5 fw-bold">{movie.movieTitle} </p>
                    <p className="m-0 fs-6">{movie.year}</p>
                    <p className="m-0 fs-6">{movie.rating}</p>
                </div>
                </div>
                <div className="mt-1 ps-0 wd-watchlist-description">
                    <p className="m-0 fs-5 fw-bold">Description</p>
                    <p className="m-0 fs-6">{movie.description}</p>
                </div>
            </div>
        </li>
    )

    return formatted
}

export default WatchedListItem;