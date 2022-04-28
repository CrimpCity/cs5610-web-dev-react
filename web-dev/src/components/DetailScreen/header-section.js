import React, {useEffect, useState} from "react";
import {isMovieBookmarkedbyUser, userTogglesBookmark} from "../../services/bookmarks-service";
import {useParams} from "react-router-dom";
import {useAuth} from "../../contexts/auth-context";

/**
 * Detail screen header section.
 *
 * It shows movie title (API), poster (API), and bookmark button and status (DB)
 *
 * @param movie
 * @returns {JSX.Element}
 * @constructor
 */
const HeaderSection = ({movie = null}) => {

  const {movieId} = useParams()
  const [bookmarked, setBookmark] = useState(false);
  const [isBookmarkDisabled, setBookmarkDisable] = useState(true);
  const {getUserData} = useAuth();
  const currentUser = getUserData();

  // Get bookmark status once page is loaded
  useEffect(() => {
    setBookmarkDisable(true);
    isMovieBookmarkedbyUser(movieId)
      .then(response => void setBookmark(response.isBookmarked))
      .catch(() => void setBookmark(false))
      .finally(() => void setBookmarkDisable(false));
  }, [movieId]);

  // Toggle bookmark/unbookmark
  const toggleBookmark = () => {
    setBookmarkDisable(true);
    userTogglesBookmark(currentUser.userID, movieId)
      .then(response => void setBookmark(response.isBookmarked))
      .finally(() => void setBookmarkDisable(false));
  }

  return (
    <div className="row flex-column-reverse flex-lg-row mb-4">
      <div className="col-12 col-lg-6">
        <h2>
          {/* Movie title */}
          {movie.title}

          {/* Bookmark button & status */}
          <input type="checkbox" className="btn-check" id="bookmark" autoComplete="off"
                 checked={bookmarked} disabled={isBookmarkDisabled}
                 onClick={toggleBookmark}/>
          <label className="btn btn-outline-warning fw-bold ms-3" htmlFor="bookmark">
            Bookmark <i className="far fa-bookmark"></i>
          </label>
        </h2>
        {movie.plot && <div>{movie.plot}</div>}
      </div>

      {/* Poster */}
      <div className="col-12 col-lg-6 d-flex justify-content-center">
        <img src={movie.image} className="card-img-top detail-poster" alt={movie.title} />
      </div>
    </div>
  )
}

export default HeaderSection;
