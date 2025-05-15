import React from "react";
import img from "../../assets/sipalaya_infotech.png";
import pay from "../../assets/pay.png";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-6 ml-20">
        {/* Company Info */}
        <div >
          <img src={img} alt="Sipalaya Infotech" className="w-[150px] mt-[-40px]" />
          <p className="text-sm w-[280px] mt-[-10px] ">
            At <span className="font-bold">Sipalaya</span>, We're here to help you thrive. Learn in-demand skills, get hired, and advance your career with us. Join today and start your journey to success.</p>
          <p className="font-bold mt-2">WhatsApp / Phone:</p>
          <p>9851344071 | 9806393939</p>
          <p className="font-bold mt-2">Gmail:</p>
          <p>infotech@sipalaya.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-purple-700">QUICK LINKS</h3>
          <ul className="mt-2 space-y-2">
          <NavLink to={'/my-enrollments'}> <li className="hover:text-purple-600">Dashboard</li></NavLink> 
           <NavLink to='/allcourses'><li  className="hover:text-purple-600">Courses</li></NavLink>
           <NavLink to="/Contact"><li className="hover:text-purple-600">Contact Us</li></NavLink>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-bold text-purple-700">EXPLORE OUR COURSES</h3>
          <ul className="mt-2 space-y-2">
            <li>Python With Data Science | 3 Months</li>
            <li>MERN Stack | 3 Months</li>
            <li>Full Stack Web Development in Python With Django | 3 Months</li>
          </ul>
        </div>

        {/* Payment Section */}
        <div>
          <h3 className="text-lg font-bold text-purple-700">PAYMENT POWERED BY</h3>
          <div className="mt-2">
            <img src={pay} alt="eSewa" className="h-10" />
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 text-white text-center py-4 px-10 flex justify-between items-center">
      {/* Left - Social Media Icons */}
      <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white text-2xl hover:scale-110 transition-transform"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E4405F] text-white text-2xl hover:scale-110 transition-transform"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5] text-white text-2xl hover:scale-110 transition-transform"
      >
        <FaLinkedinIn />
      </a>
    </div>

      {/* Right - Links */}
      <div className="flex space-x-6 mr-60">
<p className="hover:opacity-75" >Blogs</p>
         <p className="hover:opacity-75">Refund & Cancellation Policy</p>
      </div>
    </div>
    <div className=" h-[0.1px]  border-t border-white "></div>
   
      {/* Bottom Section */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 text-white text-center py-4">
        
      
        <p className="mt-2">© All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
