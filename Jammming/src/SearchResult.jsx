// SearchResults.js
import PropTypes from 'prop-types';
import TrackList from './TrackList';

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onAddTrack: PropTypes.func.isRequired,
};

function SearchResults({ searchResults, onAddTrack }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAddTrack} />
    </div>
  );
}

export default SearchResults;

