import React from 'react'
import Head from './Head'
import Sidebar from './Sidebar'
import Body from './Body'
import ButtonList from './ButtonList'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  return (
    
    <div className='flex w-screen h-screen'>
       {/* <ButtonList /> */}
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default MainContainer