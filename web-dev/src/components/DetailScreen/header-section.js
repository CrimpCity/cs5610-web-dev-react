import React, {useState} from "react";

const HeaderSection = ({movie = null}) => {

  // TODO: retrieve bookmark initial state from API
  const [bookmarked, setBookmark] = useState(false);

  return (
    <div className="row flex-column-reverse flex-lg-row mb-4">
      <div className="col-12 col-lg-6">
        <h2>
          {movie.title}
          <input type="checkbox" className="btn-check" id="bookmark" autoComplete="off"
                 checked={bookmarked} onChange={event => setBookmark(event.target.checked)}/>
          <label className="btn btn-outline-warning fw-bold ms-3" htmlFor="bookmark">
            Bookmark <i className="far fa-bookmark"></i>
          </label>
        </h2>
        {movie.plot && <div>{movie.plot}</div>}
      </div>
      <div className="col-12 col-lg-6 d-flex justify-content-center">
        <img src={movie.image} className="card-img-top detail-poster" alt={movie.title} />
      </div>
    </div>
  )
}

export default HeaderSection;
