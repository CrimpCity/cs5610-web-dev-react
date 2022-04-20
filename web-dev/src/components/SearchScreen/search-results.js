import React from "react";
import resultsJSON from "./results.json";
import SearchItem from "./search-item";
import {useSearchParams} from "react-router-dom";

const SearchResults = () => {

  const [searchParams] = useSearchParams();
  const search = searchParams.get('q');

  // TODO: update search result from API & remove results.json
  // Temporary for demo
  const results = (search && "harry potter".startsWith(search.toLowerCase()))? resultsJSON: [];

  if (!search) return (
    <div className="ps-5">
      <h1 className="text-secondary">
        <i className="fas fa-arrow-up fa-2x"></i>
      </h1>
      <h1 className="text-dark">Search for your favorite movies here!</h1>
    </div>);
  else return (
    <div className="ps-4 pe-4">
      {search && <h2>Search "{search}"</h2>}
      <div className="row g-2">
        {results.map(result => <SearchItem key={result._id} item={result} />)}
      </div>
      <p className="text-center">
        {results.length ? results.length : "No"} results found
      </p>
    </div>
  );
}

export default SearchResults;
