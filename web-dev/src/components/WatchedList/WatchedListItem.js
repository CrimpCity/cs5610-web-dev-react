import "./watched-list.css"
import { React, useState } from "react";
import { toggleBookmark } from "../../actions/bookmark-actions.js"
import { useAuth } from "../../contexts/auth-context";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const WatchedListItem = (movie, index) => {
    const [isWatched, setIsWatched] = useState(true);
    const { getUserData } = useAuth();
    const currentUser = getUserData();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let dimImage = "";
    if (isWatched) {
        dimImage = "wd-dim-poster";
    }

    const formatted = (
        <li className="list-group-item" style={{ minWidth: "400px" }} key={index}>
            <div className="d-flex wd-watchlist-frame">
                <div className="d-flex">
                    <div className="mt-1 pe-0 me-3">
                        <div className="position-relative">
                            <img src={movie.moviePoster}
                                className={`mt-1 float-start wd-watchlist-image ${dimImage}`}
                                onClick={() => navigate(`/detail/${movie.imdbID}`)}
                                alt={movie.movieTitle}>
                            </img>
                            <div className="position-absolute top-0 start-0 ms-4">
                                <span onClick={() => {
                                    toggleBookmark(dispatch, currentUser.userID, movie._id);
                                    setIsWatched(!isWatched);
                                }}
                                    className="wd-icon-color-not-watched">
                                    {isWatched ? <i className="fas fa-bookmark"></i>
                                        : <i className="far fa-bookmark"></i>}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="wd-watchlist-info mt-1 me-3">
                        <p className="m-0 fs-5 fw-bold" onClick={() => navigate(`/detail/${movie.imdbID}`)}>
                            {movie.movieTitle}
                        </p>
                    </div>
                </div>
                <div className="mt-1 ps-0 wd-watchlist-description"
                    onClick={() => navigate(`/detail/${movie.imdbID}`)} >
                    <p className="m-0 fs-5 fw-bold">Description</p>
                    <p className="m-0 fs-6">{movie.movieDescription}</p>
                </div>
            </div>
        </li>
    )

    return formatted
}

export default WatchedListItem;