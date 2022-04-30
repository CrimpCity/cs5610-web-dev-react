import React, {useEffect, useRef} from "react";
import {useSearchParams} from "react-router-dom";

const SearchBar = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchRef = useRef();
  useEffect(() => {
    const keyword = searchParams.get('q');
    searchRef.current.value = keyword ? keyword : '';
  }, [searchParams]);

  return (
    <div className="col position-relative m-3 flex-grow-0 flex-shrink-0">
      <label htmlFor="search-box" className="position-absolute top-50 ms-4 translate-middle">
        <i className="fas fa-search"></i></label>
      <form onSubmit={event => {
        setSearchParams({'q': searchRef.current.value});
        event.preventDefault();
      }}>
        <input type="search" id="search-box"
               className="form-control rounded-pill ps-5"
               placeholder="Search movie"
               ref={searchRef}
               required />
      </form>
    </div>
  );
}

export default SearchBar;