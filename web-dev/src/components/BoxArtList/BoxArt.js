import BoxArtItem from "./BoxArtItem.js";
import Movie from "../data/Movie.json";
// import { useSelector } from "react-redux";


const BoxArt = () => {
    // const Movie = useSelector(state => state.movie);
    return (
        <>
            {
                Movie.map((movie, index) => { return (BoxArtItem(movie, index)); })
            }
        </>
    );
}

export default BoxArt;
