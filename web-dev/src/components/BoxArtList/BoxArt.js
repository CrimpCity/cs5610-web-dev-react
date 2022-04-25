import BoxArtItem from "./BoxArtItem.js";

// import { useSelector } from "react-redux";


const BoxArt = ({ MovieList, isBooked }) => {
    // const Movie = useSelector(state => state.movie);
    return (
        <>
            {
                MovieList.map((movie, index) => { return (BoxArtItem(movie, index, isBooked)); })
            }
        </>
    );
}

export default BoxArt;
