import  { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer.js';


const spotify = new SpotifyWebApi();

function App() {
  const  [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash ="";
    const  _token = hash.access_token;
    
    if (_token) {
    dispatch({
      type: "SET TOKEN",
      token: _token,
    });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("#@!" ,user);
        dispatch({
          type: "SET USER",
          user: user,
        });
    });
    }


    console.log("I HAVE A TOKEN" , token)
  } , []);

  console.log("$$", user);
  console.log("**", token);


  return (
    <div className="App">{token ? 
      <Player /> : 
      <Login /> 
     }
    </div>
  );
}

export default App;
