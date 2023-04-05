import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
function Layout() {
  return (// style the div and the outlet
    <div className='flex w-screen flex-row'>
   
      <Sidebar/>
        
        <div className='w-5/6 flex flex-col'>
        <h1 className='text-center p-1 bg-neutral-800 text-white font-bold text-lg'>writeAI</h1>
          <Outlet/>
        </div>
        
    </div>
  )
}

export default Layout