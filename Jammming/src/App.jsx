/* eslint-disable no-unused-vars */
// App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './PlayList';
import Playlist from './PlayList';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some((playlistTrack) => playlistTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    const updatedPlaylistTracks = playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    setPlaylistTracks(updatedPlaylistTracks);
  };

  const savePlaylistToSpotify = () => {
    // Implement functionality to save the playlist to Spotify
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAddTrack={addTrackToPlaylist} />
        <Playlist
          playlistTracks={playlistTracks}
          onRemoveTrack={removeTrackFromPlaylist}
          onSave={savePlaylistToSpotify}
        />
      </div>
    </div>
  );
};

export default App;
