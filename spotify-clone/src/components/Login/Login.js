import React from 'react';
import './Login.css';
import { SpotifyLogo } from '../../icons/Icons';
import { loginUrl } from '../Spotify/Spotify';

export default function Login() {
  return (
    <div className="login">
      <SpotifyLogo />
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}
