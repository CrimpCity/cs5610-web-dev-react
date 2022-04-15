import MovieListItem from "./MovieListItem.js";
import Movie from "./Movie.json";
// import { useSelector } from "react-redux";


const MovieList = () => {
    // const Movie = useSelector(state => state.movie);
    return (
        <>
            {
                Movie.map((movie, index) => { return (MovieListItem(movie, index)); })
            }
        </>
    );
}

export default MovieList;
