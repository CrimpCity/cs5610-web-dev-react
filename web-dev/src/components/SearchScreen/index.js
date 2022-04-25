import React from "react";
import SearchResults from "./search-results";
import SearchBar from "./search-bar";
import NavigationTopBar from "../NavigationTopBar";

/**
 * Search main screen
 *
 * @returns {JSX.Element}
 * @constructor
 */
const SearchScreen = () => {
  return (
    <div className="container vh-100 d-flex flex-column">
      <NavigationTopBar />

      {/* Top padding for fixed navbar */}
      <div className="p-4"></div>

      {/* Search bar */}
      <SearchBar />

      {/* Search results */}
      <SearchResults />
    </div>
  );
}

export default SearchScreen;