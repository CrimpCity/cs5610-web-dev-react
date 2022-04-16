import "./watched-list.css"
import { React, useState } from "react";





const WatchedListItem = (movie, index) => {
    const [isWatched, setIsWatched] = useState(true);


    const formatted = (
        <li className="list-group-item" key={index}>
            <div className="row">
                <div className="col-4 mt-1 pe-0">

                    <div className="position-relative">
                        <img src={movie.movieImage} className="mt-1 float-start" width="360px"
                            height="200px" alt={movie.title}></img>
                        <div className="position-absolute top-0 wd-icon-position me-4">
                            <span onClick={() => setIsWatched(!isWatched)} className="wd-icon-color-not-watched">
                                {isWatched ? <i className="fas fa-bookmark"></i>
                                    : <i className="far fa-bookmark"></i>}
                            </span>

                        </div>
                    </div>


                </div>
                <div className="col-2 mt-1 px-0">
                    <p className="m-0 fs-5 fw-bold">{movie.title} </p>
                    <p className="m-0 fs-6">{movie.year}</p>
                    <p className="m-0 fs-6">{movie.rating}</p>
                </div>
                <div className="col-6 mt-1 ps-0">
                    <p className="m-0 fs-5 fw-bold">Description</p>
                    <p className="m-0 fs-6">{movie.description}</p>
                </div>
            </div>
        </li>
    )

    return formatted
}

export default WatchedListItem;