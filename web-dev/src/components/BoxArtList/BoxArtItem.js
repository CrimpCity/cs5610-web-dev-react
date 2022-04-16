import { React, useState } from "react";



const BoxArtItem = (movie, index) => {
    const [isWatched, setIsWatched] = useState(false);

    let dimImage = "";
    if (isWatched) {
        dimImage = "wd-dim-boxart";
    }

    const formatted = (
        <li className="list-group-item p-0" key={index}>
            <div className="row mx-auto">
                <div className="position-relative">
                    <img src={movie.movieImage}
                        className={`wd-rounded-border float-start ${dimImage}`}
                        width="225px" height="125px"
                        alt={movie.title}>
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
    )

    return formatted
}

export default BoxArtItem;