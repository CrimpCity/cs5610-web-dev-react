import React from "react"
import "./box-art-list.css"
import BoxArt from "./BoxArt.js";



const BoxArtList = () => {
    return (
        <>
            <ul className="list-group wd-trending-bg-color py-3">
                <li className="list-group-item fw-bold fs-4">Trending Now</li>
                <ul className="list-group list-group-horizontal d-flex justify-content-between">
                    <BoxArt />
                </ul>
            </ul>
        </>
    );

}
export default BoxArtList;