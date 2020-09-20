import React from 'react';
import spotifyLogo from './spotify-logo.jpg';
import spotifyEmblem from './spotify-emblem.jpg';

const SpotifyLogo = () => {
  return <img src={spotifyLogo} alt={"Spotify Logo"} />;
}

const SpotifyEmblem = () => {
  return <img src={spotifyEmblem} alt={"Spotify Emblem"} />;
}


export { SpotifyLogo, SpotifyEmblem };
