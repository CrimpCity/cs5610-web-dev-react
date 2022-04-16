import React from "react"
import "./box-art-list.css"
import BoxArt from "./BoxArt.js";



const BoxArtList = ({ movies }) => {
    return (
        <>
            <ul className="list-group wd-trending-bg-color pb-3">
                <ul className="list-group list-group-horizontal d-flex justify-content-between">
                    <BoxArt MovieList={movies} />
                </ul>
            </ul>
        </>
    );

}
export default BoxArtList;