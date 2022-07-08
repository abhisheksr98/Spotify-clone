export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri= "http://localhost:3000/";
const clientId = "bcb145295a8a4b4184c0110a6493a4ee";


const scopes =[   
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial , item) => {
       
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      
        return initial;
    } , {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;