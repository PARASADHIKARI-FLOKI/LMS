import React from "react";
import { FaGamepad, FaStar, FaUsers, FaAward } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-[100px]">
      <h2 className="text-5xl font-bold text-center mb-4 text-blue-700">Our Story</h2>
      <p className="text-center text-xl w-xl ml-36 text-blue-500">
        Make learning and teaching more effective with active participation and student collaboration.
      </p>

      {/* Background Section - Full Cover */}
      <div className="bg-[#0b132b] text-white w-screen relative left-1/2 -translate-x-1/2 px-6 py-6 mt-6">
        <div className="max-w-4xl mx-auto">
          {/* Background */}
          <section className="mb-32 mt-20">
            <h1 className="text-4xl font-bold text-blue-400 mb-10">Background</h1>
            <p className="ml-10 text-[18px]">
              Sipalaya empowers professionals and students in the tech industry with tailored, top-notch training programs. 
              Our expert instructors, with extensive industry experience, provide personalized support. 
              Offering interactive, hands-on courses covering the latest technologies, we've helped many professionals grow in their careers.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mt-20">
            <h1 className="text-4xl font-semibold mb-5 text-blue-400">Mission & Vision</h1>
            
            <h2 className="text-lg font-semibold mb-3">Mission:</h2>
            <ul className="list-disc pl-5 ml-5 text-[18px]">
              <li>Provide high-quality, comprehensive IT training and development programs.</li>
              <li>Empower professionals and students to advance their careers and achieve their goals.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-4 mb-3">Vision:</h2>
            <ul className="list-disc pl-5 ml-5 text-[18px]">
              <li>Become the leading provider of IT training and development programs in the region.</li>
              <li>Be recognized for our commitment to excellence and helping students succeed in the tech industry.</li>
            </ul>
          </section>

          {/* Approach */}
          <section className="mt-10">
            <h1 className="text-xl font-semibold mb-3 text-white">Our Approach</h1>
            <ul className="list-disc pl-5 ml-5 text-[18px]">
              <li>Foster a positive, supportive learning environment.</li>
              <li>Keep pace with the latest technologies and industry best practices.</li>
              <li>Equip students with necessary tools and resources for success.</li>
              <li>Believe in and support every student's potential for success in the tech industry.</li>
            </ul>
          </section>

          {/* Core Values */}
          <section className="mt-20 text-center">
            <h1 className="text-4xl font-bold text-fuchsia-500 mb-10">Things that make us proud</h1>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col items-center text-center">
                <FaGamepad className="text-6xl text-fuchsia-500 mb-3 hover:text-[#2d1b69]" />
                <h2 className="text-xl font-semibold text-fuchsia-500">The success of our students</h2>
                <p className="text-[18px] w-[300px] text-gray-300">
                  Empowering success fuels our purpose. Proudly guiding countless professionals and students to reach their full potential.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaStar className="text-6xl text-blue-400 mb-3 hover:text-[#2d1b69]" />
                <h2 className="text-xl font-semibold text-fuchsia-500">The quality of our courses</h2>
                <p className="text-[18px] w-[300px] text-gray-300">
                  We offer top-notch, personalized courses led by industry experts. Our interactive approach ensures optimal learning and skill development for every student.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaUsers className="text-6xl text-blue-400 mb-3 hover:text-[#2d1b69]" />
                <h2 className="text-xl font-semibold text-fuchsia-500">The support of our team</h2>
                <p className="text-[18px] w-[300px] text-gray-300">
                  Our dedicated team ensures student success. Proudly supported by talented and passionate individuals.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FaAward className="text-6xl text-blue-400 mb-3 hover:text-[#2d1b69]" />
                <h2 className="text-xl font-semibold text-fuchsia-500">Our reputation in the industry</h2>
                <p className="text-[18px] w-[300px] text-gray-300">
                  We've earned trust as a leading IT training provider. Proud of our industry reputation and student impact.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
