import React from "react";
import {Link} from "react-router-dom";
import "./search-screen.css"

const SearchItem = ({item = {}}) => {
  return (
    <Link to={"/detail/" + item._id} className="col-12 sm-4 col-md-6 col-lg-4 col-xl-3 text-decoration-none">
      <div className="card-img-top w-100 bg-dark d-flex justify-content-center">
        <img src={item.image} className=" search-item-img" alt={item.title} />
      </div>
      <h5 className="card-title bg-light rounded-bottom p-2 text-center">
        {item.title}
        <div className="text-dark text-center"><i className="fa-regular fa-message ms-2 me-1 fa-xs"></i> {item.commentCount}</div>
      </h5>
    </Link>
  );
}

export default SearchItem;