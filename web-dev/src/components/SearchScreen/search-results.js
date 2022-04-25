import React, {useEffect, useState} from "react";
import resultsJSON from "./results.json";
import SearchItem from "./search-item";
import {useSearchParams} from "react-router-dom";
import {searchTitle} from "../../services/title-service";

const SearchResults = () => {

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q');

  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState({status: "success", count: 0, titles: []});

  useEffect(() => {
    setLoading(true);
    if (keyword) searchTitle(keyword)
      // If perform search successfully, display results
      .then(response => {
        setResults({status: "success", count: response.data.count, titles: response.data.titles});
      })

      // If search fail, display error.
      .catch(error => {
        if (error.response) {
          setResults({...results, status: "server-fail"});
        } else if (error.request) {
          setResults({...results, status: "timeout"});
        }
      })
      .finally(() => {
        setLoading(false);
        console.log("search!")
      })
  }, [searchParams])

  // If 'q' query param, display hint.
  if (!keyword) return (
    <div className="ps-5">
      <h1 className="text-secondary">
        <i className="fas fa-arrow-up fa-2x"></i>
      </h1>
      <h1 className="text-dark">Search for your favorite movies here!</h1>
    </div>);

  // Otherwise, perform search and display results.
  const SearchLoadingBox = () => (
    <div className="flex-fill d-flex">
      <div className="m-auto search-loading-box">
        <h4 className="text-center mb-4">Searching for "{keyword}"</h4>
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin-pulse fa-10x"></i>
        </div>
      </div>
    </div>
  );

  const SearchResultsBox = () => (
    <div className="ps-4 pe-4 content">
      <h2>Search "{keyword}"</h2>

      {/* Case: search successfully */}
      {results.status === "success" &&
        <>
          <div className="row g-2">
            {results.titles.map(result => <SearchItem key={result._id} item={result} />)}
          </div>
          <p className="text-center">
            {results.count ? results.count : "No"} results found
          </p>
        </>
      }

      {/* Case: server error */}
      {results.status === "server-fail" && <h3>Gateway timeout: IMDB API server seem busy... Please try again!</h3>}

      {/* Case: search timeout (15 seconds) */}
      {results.status === "timeout" && <h3>Search timeout. Please try again!</h3>}
    </div>
  )

  return (
    <>
      {isLoading && <SearchLoadingBox />}
      {!isLoading && <SearchResultsBox />}
    </>
  );
}

export default SearchResults;
