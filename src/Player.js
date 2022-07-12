import React from 'react'
import Sidebar from './Sidebar';
import './Player.css';
import Body from './Body';
import  Footer from './Footer'



function Player() {
  return (
    <div className='player'>
      <div className="player_body">
       <Sidebar />
       <Body />
      </div>
        <Footer/>
    </div>
  )
}

export default Player