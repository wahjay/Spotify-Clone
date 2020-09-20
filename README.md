# react-spotify-clone

This project was bootstrapped with Create React App.


## Description

This project is a spotify web app clone that simulates the interface and functionality of the playlist page from <a href="https://open.spotify.com/">Spotify web.</a>
The app fetches all the playlists from the current user. The user can then choose a playlist and play the songs inside it.
Due to copyright estrictions, all the songs can only be played in 30s as a preview. Some songs may not have a preview.

<b>The app is available <a href="https://spotify-clone-b0067.web.app">here</a></b>


## Tech Used

* React Hooks + Context
* Material UI + CSS
* Spotify Web API + Authorization 
* React Player
* Firebase Hosting

## Things to be added in the future

* Allows users to add a playilst to their libraries
* Add artists page where users can follow the artists
* Users can like songs
* Get Recommendations based on a playlist


## Issues Encountered

* There seems to be an issue with <a href='https://github.com/CookPete/react-player'>React Player</a> on Safari browser when the user first clicks to play a song, the song won't play. It only plays again
when the user clicks pause then play again. This issue only occurs to the very first click. However, this issue does not occur on Chrome.
