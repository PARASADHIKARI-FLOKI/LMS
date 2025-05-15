import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
      fullName: "",
      contact: "",
      email: "",
      message: "",
    });
  };

  // Features array
  const features = [
    { icon: "📖", title: "Learn" },
    { icon: "📈", title: "Grow" },
    { icon: "🔄", title: "Practice" },
    { icon: "🕒", title: "SUN - FRI: 10AM-6PM\nSAT: Closed" },
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <h1 className="text-center text-5xl mt-28 text-blue-500 font-bold mb-12">
        Contact US
      </h1>

      {/* Animated Features Section */}
      <div className="w-full bg-[#0b132b] py-20 px-6 flex justify-center gap-6 flex-wrap overflow-hidden">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#172851] hover:bg-[#100d15] text-white flex flex-col items-center justify-center text-xl font-medium p-8 w-64 h-48 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 100 }} // Start from the right
            animate={{ opacity: 1, x: 0 }} // Move to original position
            transition={{ duration: 0.9, delay: index * 0.2 }} // Staggered animation
          >
            <span className="text-4xl">{item.icon}</span>
            <p className="mt-4 text-center whitespace-pre-line">{item.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Google Map */}
      <div className="flex justify-center mt-[-50px]">
        <iframe
          className="rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.6473609625036!2d85.34317037525248!3d27.67152297620314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e1!3m2!1sne!2snp!4v1742450002727!5m2!1sne!2snp"
          width="1100"
          height="250"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="mt-10 bg-[#0b132b] flex justify-center items-center flex-col py-6 px-6">
        <h1 className="text-blue-500 text-3xl font-serif text-center">
          Leave Us a Message
        </h1>
        <p className="text-white text-2xl text-center max-w-4xl mt-4">
          Please feel free to leave us a message about any inquiry, our team will get in touch with you as soon as possible.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-center items-start py-6 px-6 gap-40">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-black text-3xl font-bold text-center max-w-2xl mb-6">
            We look forward to hearing from you and helping you succeed in your career.
          </h1>

          <form onSubmit={handleSubmit} className="p-8 w-full max-w-2xl">
            <p className="mb-4">Fields marked with an * are required</p>

            <label className="block font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-red-400 rounded-md mb-4 bg-yellow-50"
              required
            />

            <label className="block font-medium mb-2">Contact *</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 border border-red-400 rounded-md mb-4 bg-yellow-50"
              required
            />

            <label className="block font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-red-400 rounded-md mb-4 bg-yellow-50"
              required
            />

            <label className="block font-medium mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-red-400 rounded-md mb-4 h-32 bg-yellow-50"
              required
            />

            <button type="submit" className="bg-green-950 text-white p-3 rounded-md hover:bg-green-700 transition">
              Send
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/3 px-6 mt-56 p-6 ">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Call Us</h2>
          <p className="text-gray-600">+977 9818968546</p>
          <p className="text-gray-600">+977 9860552717</p>

          <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-4">Email Us</h2>
          <p className="text-gray-600">infotech@sipalaya.com</p>
          <p className="text-gray-600">sipalayainfotech01@gmail.com</p>

          <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-4">Visit Us</h2>
          <p className="text-gray-600">Nearby CCRC College</p>
          <p className="text-gray-600">Balkumari-Bridge Koteshwor, Kathmandu</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
