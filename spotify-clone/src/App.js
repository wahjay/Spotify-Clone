import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from './components/Spotify/Spotify';
import Player from './components/Player/Player';
import { useStateValue } from './StateProvider';

// create an instance of spotify so we can use spotify service in react
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // clear the returned url from spotify
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token) {
      //dispatch the retrieved token to the global context
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      // get the current user info
      spotify.getMe().then(user => {
        // dispatch the current user info to the global context
        dispatch({
          type: 'SET_USER',
          user: user
        });
      })

      spotify.getUserPlaylists()
        .then(playlists => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists
          });
        })
        .catch(err => alert(err.message));

      spotify.getPlaylist('37i9dQZEVXcTpcY7W5MHa2')
        .then(res => {
          dispatch({
            type: "SET_PLAYLIST",
            playlist: res
          });
        })
        .catch(err => alert(err.message));
    }

  }, []);

  return (
    <div className="app">
      { token ? <Player spotify={spotify} /> : <Login /> }
    </div>
  );
}

export default App;
