import { React, useState } from "react";



const BoxArtItem = (movie, index, isBooked = false) => {
    const [isWatched, setIsWatched] = useState(isBooked);

    let dimImage = "";
    if (isWatched) {
        dimImage = "wd-dim-boxart";
    }

    return (
        <li className="list-group-item p-0 d-flex " key={index}>
            <div className="mx-auto">
                <div className="position-relative">
                    <img src={movie.moviePoster}
                        className={`wd-box-art-images wd-rounded-border float-start ${dimImage}`}

                        alt={movie.movieTitle}>
                    </img>
                    <div className="position-absolute top-0 end-0 me-4">
                        <span onClick={() => setIsWatched(!isWatched)} className="wd-icon-color-not-watched">
                            {isWatched ? <i className="fas fa-bookmark"></i>
                                : <i className="far fa-bookmark"></i>}
                        </span>

                    </div>
                </div>
            </div>
        </li>
    );
}

export default BoxArtItem;