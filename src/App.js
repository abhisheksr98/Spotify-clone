import  { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const  [token, setToken] = useState();
  
  useEffect(() => {
    const hash = getTokenFromUrl(null);
    window.location.hash ="";
    const  _token = hash.access_token;
    
    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => (
        console.log("#@!" ,user)
      ));
    }

    console.log("I HAVE A TOKEN", token)
  } , []);


  return (
    <div className="App">{token ? 
      <Player /> : 
      <Login /> 
     }
    </div>
  );
}

export default App;
