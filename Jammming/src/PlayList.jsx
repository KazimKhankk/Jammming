/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Playlist.js
import React from 'react';
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
