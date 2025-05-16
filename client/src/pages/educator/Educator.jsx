import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/educator/NavBar'
import Siderbar from '../../components/educator/Siderbar'

const Educator = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <NavBar />
      <div className='flex'>
        <Siderbar/>
        <div className='flex-1'>
       { <Outlet />}
       </div>
      </div>
     
    </div>
  )
}

export default Educator
