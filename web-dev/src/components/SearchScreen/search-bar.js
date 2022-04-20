import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const SearchBar = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q'));

  useEffect(() => setSearch(searchParams.get('q')), [searchParams]);

  return (
    <div className="col position-relative m-3">
      <label htmlFor="search-box" className="position-absolute top-50 ms-4 translate-middle">
        <i className="fas fa-search"></i></label>
      <form onSubmit={event => {
        setSearchParams({'q': search});
        event.preventDefault();
      }}>
        <input type="search" id="search-box"
               className="form-control rounded-pill ps-5"
               placeholder="Search movie" value={search}
               onChange={event => setSearch(event.target.value)}
               required />
      </form>
    </div>
  );
}

export default SearchBar;