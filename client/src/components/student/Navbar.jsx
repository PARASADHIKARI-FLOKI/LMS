import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import img from "../../assets/sipalaya_infotech.png";
import axios from 'axios'
import { toast } from 'react-toastify'

const Navbar = () => {
  const location = useLocation()
  const { navigate, isEducator, setIsEducator, getToken } = useContext(AppContext)
  const { openSignIn } = useClerk()
  const { user } = useUser()
  const [scrolled, setScrolled] = useState(false)

  const isCourseListPage = location.pathname.includes('/course-list');

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator')
        return;
      }
      const token = await getToken()
      const { data } = await axios.get('http://localhost:9000/api/educator/update-role', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (data.success) {
        setIsEducator(true)
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Courses", path: "/course-list" },
    { name: "Job Placement", path: "/jobplacement" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={`
      fixed top-0 w-full z-50 transition-all duration-300 border-b
      ${scrolled ? 'bg-white text-black border-gray-300 shadow-md' : 'bg-[#2d1b69] text-white border-gray-500'}
      flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 py-4
    `}>
      {/* Logo */}
      <img onClick={() => navigate('/')} src={img} alt="logo" className='w-12 cursor-pointer' />

      {/* Navigation Links */}
      <ul className="flex flex-wrap gap-4 mt-3 md:mt-0 md:flex-row items-center font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-md transition-all duration-200 ${
                  isActive
                    ? `${scrolled ? 'text-black font-semibold border-b-2 border-blue-700' : 'text-white font-semibold border-b-2 border-blue-300'}`
                    : `${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-300'}`
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        {user && (
          <>
            <li className='ml-[200px]'>
              <button onClick={becomeEducator} className={`${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-300'}`}>
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
            </li>
            <li>
              <Link to="/my-enrollments" className={`${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-300'}`}>
                My Enrollments
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4 mt-3 md:mt-0">
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className={`px-4 py-1 rounded-full transition-all duration-200 ${
              scrolled ? 'bg-blue-600 text-white' : 'bg-white text-[#2d1b69]'
            }`}
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
