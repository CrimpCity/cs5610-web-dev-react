import WatchedListItem from "./WatchedListItem.js";
import Movie from "../data/Movie.json";
// import { useSelector } from "react-redux";


const Watched = () => {
    return (
        <>
            {
                Movie.map((movie, index) => { return (WatchedListItem(movie, index)); })
            }
        </>
    );
}

export default Watched;

