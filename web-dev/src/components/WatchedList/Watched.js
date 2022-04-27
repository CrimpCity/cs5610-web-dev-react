import WatchedListItem from "./WatchedListItem.js";
import { React } from "react";


const Watched = ({ movieList }) => {
    return (
        <>
            {
                movieList.map((movie, index) => { return (WatchedListItem(movie, index)); })
            }
        </>
    );
}

export default Watched;

