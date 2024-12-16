import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../context/searchContext';

function SearchBar({ inputRef }) {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <input
        ref={inputRef}
        onChange={handleChange}
        className="search_input rounded-md p-1 w-60"
        type="text"
        value={searchQuery}
        placeholder="Search movies..."
      ></input>
    </div>
  );
}

export default SearchBar;
