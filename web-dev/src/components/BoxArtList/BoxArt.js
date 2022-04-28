import BoxArtItem from "./BoxArtItem.js";


const BoxArt = ({ MovieList, isBooked }) => {
    return (
        <>
            {
                MovieList.map((movie, index) => { return (BoxArtItem(movie, index, isBooked)); })
            }
        </>
    );
}

export default BoxArt;