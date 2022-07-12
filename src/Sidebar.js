import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'

function Sidebar() {
  return (
    <div className='sidebar'>
     <img className='sidebar_logo' src="" alt="" />
    
     <SidebarOptions title="Home" />
     <SidebarOptions title="Search"  />
     <SidebarOptions title="Your Libraray"  />
    </div>
  )
}

export default Sidebar