import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import img from "../../assets/sipalaya_infotech.png";

import  {UserButton, useUser} from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const educationData = dummyEducatorData
  const {user}=useUser()
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3'>
      <Link to='/'>
      <img src={img} alt="" className='w-24 lg:w-12' />
      </Link>
      <div className='flex itmes-center gap-5 text-gray-500 relative'>
        <p>Hi! {user ? user.fullName : 'Developers'}</p>
        {user ? <UserButton/> : <img src={assets.profile_img} alt="" className='max-w-8' />
      }
      </div>
    </div>
  )
}

export default NavBar
