import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';
import img from "../../assets/sipalaya_infotech.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Menu, X } from 'lucide-react'; // icons

const Navbar = () => {
  const location = useLocation();
  const { navigate, isEducator, setIsEducator, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isCourseListPage = location.pathname.includes('/course-list');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
        return;
      }
      const token = await getToken();
      const { data } = await axios.get('http://localhost:9000/api/educator/update-role', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (data.success) {
        setIsEducator(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Courses", path: "/course-list" },
    { name: "Job Placement", path: "/jobplacement" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b
        ${scrolled ? 'bg-white text-black border-gray-300 shadow-md' : 'bg-[#2d1b69] text-white border-gray-500'}`}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-36 py-3">
        {/* Logo */}
        <img onClick={() => navigate('/')} src={img} alt="logo" className="w-12 cursor-pointer" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
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
              <li>
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

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col md:hidden items-start gap-4 px-6 pb-4 font-medium bg-inherit transition-all">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-1 rounded-md transition-all duration-200 ${
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
              <li>
                <button onClick={() => { becomeEducator(); setIsMobileMenuOpen(false); }} className={`${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-300'}`}>
                  {isEducator ? 'Educator Dashboard' : 'Become Educator'}
                </button>
              </li>
              <li>
                <Link to="/my-enrollments" onClick={() => setIsMobileMenuOpen(false)} className={`${scrolled ? 'hover:text-blue-600' : 'hover:text-blue-300'}`}>
                  My Enrollments
                </Link>
              </li>
            </>
          )}
          <li>
            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={() => {
                  openSignIn();
                  setIsMobileMenuOpen(false);
                }}
                className={`mt-2 px-4 py-1 rounded-full transition-all duration-200 ${
                  scrolled ? 'bg-blue-600 text-white' : 'bg-white text-[#2d1b69]'
                }`}
              >
                Create Account
              </button>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
