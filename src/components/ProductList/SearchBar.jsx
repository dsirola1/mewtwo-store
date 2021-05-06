import React from 'react';

const SearchBar = ({ searchInput, updateSearchInput }) => {
  return (
    <div>
    <input
      value = {searchInput}
      className="searchTextBox"
      type="text"
      placeholder="Search by Name"
    ></input>
    <button 
      className="searchButton" 
      onChange={(e) => updateSearchInput(e.target.value)}
      >Search
    </button>
  </div>
  );
};
export default SearchBar;
