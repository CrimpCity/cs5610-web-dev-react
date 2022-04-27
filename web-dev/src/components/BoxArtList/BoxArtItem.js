import { React, useState } from "react";
import SecureComponent from "../SecureComponent/index.js"


const BoxArtItem = (movie, index, isBooked = false) => {
    const [isWatched, setIsWatched] = useState(isBooked);

    let dimImage = "";
    if (isWatched) {
        dimImage = "wd-dim-boxart";
    }
    // check if movie is placeholder
    // if yes then no add/remove
    // if no then add/remove to bookmark list

    function RenderBookmarkButton(movie) {
        console.log(movie.movie.imdbID)
        if (movie.movie.imdbID === "N/A") {
            // this is a placeholder image so don't render the bookmark icon button
            return "";
        }
        else {
            // this is a real movie
            // add link to details page here
            // add bookmark toggle here for event
            return (
                <span onClick={() => setIsWatched(!isWatched)}
                    className="wd-icon-color-not-watched">
                    {isWatched ? <i className="fas fa-bookmark"></i>
                        : <i className="far fa-bookmark"></i>}
                </span>
            )
        };
    };



    return (
        <li className="list-group-item p-0 d-flex " key={index}>
            <div className="mx-auto">
                <div className="position-relative">
                    <img src={movie.moviePoster}
                        className={`wd-box-art-images wd-rounded-border float-start ${dimImage}`}
                        alt={movie.movieTitle}>
                    </img>
                    <div className="position-absolute top-0 end-0 me-4">
                        <SecureComponent>
                            <RenderBookmarkButton movie={movie} />
                        </SecureComponent>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default BoxArtItem;