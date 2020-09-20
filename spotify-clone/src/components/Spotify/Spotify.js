// https://developer.spotify.com/documentation/general/guides/authorization-guide/

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = "https://spotify-clone-b0067.web.app/";
const clientId = '21f2499374724f7c97c86b9e871d6864';

// Scopes enable your application to access specific API endpoints on behalf of a user.
// The set of scopes you pass in your call determines the access permissions that the user is required to grant.
const scopes = [
  "user-top-read"             // get a user's top artists and tracks
];

// return an object
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
}

export const loginUrl = `
  ${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true
`;
