import React from "react";
import student1 from '../../assets/student1.png'
import student2 from "../../assets/student2.png";
import student3 from "../../assets/student3.png";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import Footer from "../../components/student/Footer";
import SearchBar from "../../components/student/SearchBar";

const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const testimonials = [
    {
      name: "Suman Shrestha",
      role: "Python Student",
      feedback:
        "Thank you for providing such a great e-learning platform. I was confused to choose any of the training institutes available here in Chitwan as I didn't find the level of teachings up to my expectation.",
      rating: 5,
      img: student1,
    },
    {
      name: "Petter Poudel",
      role: "Python Student",
      feedback:
      "I highly appreciate Sipalaya Info for organizing course what I need at the moment. The training by Instructor is awesome!... The delivery of lectures was concise and excellent.It was a great experience to learn from you.",
      rating: 4.5,
      img: student2,
    },
    {
      name: "Harry Shrestha",
      role: "Python Developer",
      feedback:
        "Awesome place for learning new skills and development of skill.Highly recommended for those who are looking for a good place to learn and grow.And the best part is that they provide internship opportunities as well.",
      rating: 5,
      img: student3,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#2d1b69] text-white flex flex-col">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center sm:px-4 md:px-16 py-12 md:py-16">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Career-Ready IT <br /> Training In Nepal
          </h1>
          <p className="text-lg sm:text-xl">
            Gain job-ready skills with our IT courses in Nepal. Elevate your
            career prospects today!
          </p>
          <NavLink to="/course-list">
            <button className="bg-[#4f3cc9] px-6 py-3 text-white rounded-lg shadow-lg hover:bg-[#3b2ba1] transition duration-300">
              View Courses →
            </button>
          </NavLink>
        </div>
         
        {/* Right Side: Image + Slider */}
        <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0 overflow-hidden">
          <Slider {...sliderSettings} className="w-full max-w-lg overflow-hidden">
            {[ 
              { title: "Web Development", desc: "Master HTML, CSS, JavaScript, React & more!", img: img4 },
              { title: "Graphic Design", desc: "Learn Photoshop, Illustrator & UI/UX design.", img: img2 },
              { title: "🎉 Special Offer!", desc: "Get 10% off for the January batch! Enroll now.", img: img3, textColor: "text-yellow-400" },
              { title: "📢 Announcement", desc: "New Python Course Launched. Join now!", img: img1, textColor: "text-green-400" }
            ].map((slide, index) => (
              <div key={index} className="bg-[#2d1b69] p-6 rounded-lg text-center w-full">
                <h2 className={`text-3xl font-bold ${slide.textColor || "text-white"}`}>{slide.title}</h2>
                <p className="text-lg mt-2">{slide.desc}</p>
                <div className="flex justify-center items-center w-full overflow-hidden">
                  <img 
                    src={slide.img} 
                    alt={slide.title} 
                    className="rounded-lg drop-shadow-lg w-full max-w-[90%] h-auto object-contain"
                  />
                </div>
                
              </div>
              
            ))}
          </Slider>
        </div>
      </div>
         
          
         
      {/* Why Choose Sipalaya Section */}
      <div className="w-full bg-white py-16 px-6 md:px-8 text-center">
  
          
        {/* Top Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[ 
            { emoji: "🚀", title: "Be Your Own Boss", desc: "Embrace Independence: Be Your Own Boss and Shape Your Future!" },
            { emoji: "🎓", title: "Reach Your Career Goals", desc: "Strive for Success: Reach Your Career Goals and Unlock Your Potential." },
            { emoji: "✅", title: "Get Hired", desc: "Validate Your Skills, Open Doors: Earn Industry-Recognized Certificates!" },
          ].map((card, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 w-full sm:w-72 flex flex-col items-center text-center border hover:bg-[#3b2ba1] group transition-all duration-300">
              <div className="text-purple-700 text-3xl group-hover:text-white">{card.emoji}</div>
              <h3 className="text-xl font-bold mt-4 text-gray-600 group-hover:text-white">{card.title}</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why choose Sipalaya?</h2>
        <p className="text-lg text-gray-600 mt-4">
          Seize the future: Secure your career with Sipalaya's cutting-edge resources and transformative learning experiences.
        </p>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mt-12">
          {[ 
            { value: "5K+", label: "Students Graduated" },
            { value: "30+", label: "Industry Mentors" },
            { value: "3L-10L", label: "Salary Range" },
            { value: "1:1", label: "Career Support" },
            { value: "50+", label: "Hiring Partners" },
            { value: "500+", label: "Interview Coding Questions" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-700">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-900 via-purple-700 to-indigo-900 text-white py-10 px-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold tracking-wide">Learn, Build & Implement</h3>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
          For Internship Guaranteed Physical / Online Live Classes
        </h2>
        <NavLink to="/register">
          <button className="mt-5 bg-[#3b2ba1] px-6 py-3 text-white rounded-lg shadow-lg hover:bg-[#2d1b69] transition duration-300">
            Register Now
          </button>
        </NavLink>
      </div>

      {/* Special Offer Section */}
      <h1 className="bg-white text-blue-600 text-center text-xl sm:text-2xl md:text-3xl font-bold p-6 sm:p-10">
        Physical | Online Internship Guaranteed IT Courses Training @Rs. 14,999 only 
        <span className="text-red-600">( Special Offer !! )</span>, OFFER Valid for 1 week - Limited Seats !
      </h1>

      {/* Testimonials & Reviews Section */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-800">Testimonial</h2>
        <p className="text-lg text-gray-600 mt-2">Hear from our students about their experiences and success stories.</p>

        <div className="max-w-3xl mx-auto mt-8">
          <Slider {...sliderSettings} dots={true}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className=" bg-gray-50 shadow-lg p-6 rounded-lg text-center">
                <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto border-4 border-purple-500" />
                <h3 className="text-xl font-semibold mt-4 text-purple-700">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                <p className="text-gray-700 mt-4">{testimonial.feedback}</p>
                <p className="text-yellow-500 mt-2">{"⭐".repeat(Math.round(testimonial.rating))}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    
    </div>
  );
};

export default Home;
