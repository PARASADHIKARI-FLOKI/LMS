import React from 'react'
import { Routes,Route, useMatch } from 'react-router-dom'

import CoursesList from './pages/student/CoursesList'
import Home from './pages/student/Home'
import AboutUs from './pages/student/AboutUs'
import Contact from './pages/student/Contact'
import Jobplacement from './pages/student/Jobplacement'
import Register from './pages/student/Register'
import CourseDetail from './pages/student/CourseDetail'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'
import "quill/dist/quill.snow.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 


const App = () => {

  const isEducatorRoute = useMatch('/educator/*');
  return (
    <div className='text-default bg-white min-h-screen'>
      <ToastContainer position="top-right" autoClose={3000} />
      {!isEducatorRoute && <Navbar /> }
    
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/jobplacement" element={<Jobplacement/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={< Contact/>} />
      <Route path="/course-list" element={<CoursesList />} />
      <Route path="/course-list/:input" element={<CoursesList />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/my-enrollments" element={<MyEnrollments />} />
      <Route path="/player/:courseId" element={<Player />} />
      <Route path="/loading/:path" element={<Loading/>} />

      <Route path="/educator" element={< Educator/>}>
      <Route path="/educator" element={< Dashboard/>} />
      <Route path="add-course" element={<AddCourse/>} />
      <Route path="my-courses" element={<MyCourses />} />
      <Route path="student-enrolled" element={<StudentsEnrolled />} />
      </Route>
      </Routes>
    </div>
  )
}

export default App
