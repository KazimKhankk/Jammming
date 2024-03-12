import PropTypes from 'prop-types';

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
/* eslint-disable no-unused-vars */

// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    try {
      setSearchResults(searchTerm);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={searchTerm} // Controlled input value
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="SearchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;

