import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import logo from './assets/Spotify_Logo_CMYK_White.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();


  return (
    <div className='sidebar'>
     <img className='sidebar_logo' src={logo} alt="" />
    
     <SidebarOptions Icon={HomeIcon}  title="Home"/>
     <SidebarOptions Icon={SearchIcon} title="Search"/>
     <SidebarOptions Icon={LibraryMusicIcon} title="Your Libraray"/>
      
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOptions   title={playlist.name} />        
      ))}
      
    </div>
  )
}

export default Sidebar