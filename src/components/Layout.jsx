import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
function Layout() {
  return (// style the div and the outlet
    <div>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Layout