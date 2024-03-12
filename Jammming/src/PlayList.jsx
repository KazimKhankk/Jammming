// Playlist.js
import PropTypes from 'prop-types';

// inside the Playlist component
Playlist.propTypes = {
  playlistTracks: PropTypes.array.isRequired,
  onRemoveTrack: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};
import TrackList from './TrackList';

const Playlist = ({ playlistTracks, onRemoveTrack, onSave }) => {
  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      {playlistTracks.length === 0 ? (
        <p>Your playlist is empty.</p>
      ) : (
        <>
          <TrackList
            tracks={playlistTracks}
            onRemove={onRemoveTrack}
            isRemoval={true}
          />
          <button className="Playlist-save" onClick={onSave}>
            SAVE TO SPOTIFY
          </button>
        </>
      )}
    </div>
  );
};

export default Playlist;
