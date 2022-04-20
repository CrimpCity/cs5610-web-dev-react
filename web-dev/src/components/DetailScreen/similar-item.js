import {Link} from "react-router-dom";
import React from "react";
import "./detail-screen.css";

const SimilarItem = ({item = {}}) => {
  return (
    <div className="d-flex similar-item-box me-2">
      <Link to={"/detail/" + item._id} className="text-decoration-none similar-item-box">
        <div className="w-100 bg-dark d-flex justify-content-center">
          <img src={item.image} className="similar-item-img" alt={item.title} />
        </div>
        <div className="rounded-bottom p-2 text-white">{item.title}</div>
      </Link>
    </div>
  );
};

export default SimilarItem;
