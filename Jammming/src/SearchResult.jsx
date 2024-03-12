// SearchResults.js
import PropTypes from 'prop-types';
import TrackList from './TrackList';

SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
    onAddTrack: PropTypes.func.isRequired,
};

function SearchResults({ searchResults, onAddTrack }) {
    try {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={searchResults} onAdd={onAddTrack} />
            </div>
        );
    } catch (err) {
        console.error(err);
        return <div>Something went wrong</div>;
    }
}

export default SearchResults;

