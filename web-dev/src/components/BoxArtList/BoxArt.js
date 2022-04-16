import BoxArtItem from "./BoxArtItem.js";

// import { useSelector } from "react-redux";


const BoxArt = ({ MovieList }) => {
    // const Movie = useSelector(state => state.movie);
    return (
        <>
            {
                MovieList.map((movie, index) => { return (BoxArtItem(movie, index)); })
            }
        </>
    );
}

export default BoxArt;
