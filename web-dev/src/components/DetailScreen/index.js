import React, {useState} from "react";
import results from "./results.json";
import {useParams} from "react-router-dom";
import NavigationTopBar from "../NavigationTopBar";
import CommentSection from "./comment-section";
import HeaderSection from "./header-section";
import similarSamples from "./similar-sample.json"
import SimilarItem from "./similar-item";

/**
 * Detail main screen
 *
 * @returns {JSX.Element}
 * @constructor
 */
const DetailScreen = () => {

  // Retrieve movie data from API based on IMDB ID
  const {movieId} = useParams()

  // TODO: Replace the temporary data with data from API
  const movie = results.find(result => result._id === movieId);
  if (movie) movie.similars = similarSamples;

  return (
    <div className="container">

      <NavigationTopBar />

      {/* Top padding for fixed navbar */}
      <div className="pt-5 pb-3"></div>

      {!movie && <h2>Title not found</h2>}

      {movie && <>
        {/* Header: title, plot, and poster */}
        <HeaderSection movie={movie} />

        {/* Trailer */}
        {movie.trailer &&
          <div className="w-100 mb-4">
            <h4>Trailer</h4>
            <div>
              <iframe width="544" height="306"
                      className="me-4"
                      src={movie.trailer + "?autoplay=false&width=544"}
                      title="Trailer video player"
                      frameBorder="no" scrolling="no" allowFullScreen></iframe>
            </div>
          </div>}

        {/* Similar section */}
        <h4>Similar titles</h4>
        <div className="d-flex w-100 bg-light rounded-3 p-2 mb-4">
          <div className="d-flex overflow-auto pb-2 similar-section">
            {movie.similars && movie.similars.map(item => (<SimilarItem key={item._id} item={item} />))}
          </div>
        </div>

        {/* Comment section */}

        <CommentSection />
      </>}

    </div>
  );
}

export default DetailScreen;
