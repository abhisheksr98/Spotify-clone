import React from 'react';
import "./Login.css";
import { loginUrl } from './Spotify.js';
import logo from './assets/Spotify_Logo_CMYK_White.png';


function Login() {
  return (
    <div className='login'>
       <img src= {logo} alt="" />
       <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login