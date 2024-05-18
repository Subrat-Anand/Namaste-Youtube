import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

export const Body = () => {

  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}
