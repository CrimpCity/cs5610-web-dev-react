import React from "react"
import "./poster-list.css"
import MovieList from "./MovieList.js";



const PosterList = () => {
    return (
        <>
            <ul className="list-group wd-trending-bg-color py-3">
                <li className="list-group-item fw-bold fs-4">Trending Now</li>
                <ul className="list-group list-group-horizontal d-flex justify-content-between">
                    <MovieList />
                </ul>
            </ul>
        </>
    );

}
export default PosterList;