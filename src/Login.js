import React from 'react';
import "./Login.css";
import { loginUrl } from './Spotify.js';

function Login() {
  return (
    <div className='login'>
       <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />
       <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login