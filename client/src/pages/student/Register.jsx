import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    college: "",
    qualification: "",
    address: "",
    interestedIn: "",
    schedule: "",
    classType: "",
    internship: "",
    queries: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-700 mt-[100px] ml-96 mr-96">Register for IT Courses Training & Internship</h1>
        <h2 className="mt-40 mr-10 text-4xl font-serif text-blue-700">Leave Us Your Details</h2>
        <p className="mt-3 text-2xl text-blue-700">Please leave your details, and our team will get in touch with you.</p>
      </div>
      <form className="p-6 rounded-lg w-full max-w-6xl bg-white" onSubmit={handleSubmit}>
      <p className="text-red-900">Fields marked with an * are required</p>
        <label className="block font-bold text-balance text-[18px] mt-4">Full Name *</label>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-3 border rounded " required />

        <label className="block mt-4 font-bold text-[18px]">Mobile Number *</label>
        <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} className="w-full p-3 border rounded" required />

        <label className="block mt-4 font-bold text-[18px] ">Email Address *</label>
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded" required />

        <label className="block mt-4 font-bold text-[18px]">Your College/ Institution Name *</label>
        <input type="text" name="college" placeholder="Your College/ Institution Name" value={formData.college} onChange={handleChange} className="w-full p-3 border rounded" required />

        <label className="block mt-4 font-bold text-[18px] ">Qualification *</label>
        <select name="qualification" value={formData.qualification} onChange={handleChange} className="w-full p-3 border rounded">
          <option value="">Select Qualification</option>
          <option value="Secondary School">Secondary School</option>
          <option value="High School">High School</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="Job Holder">Job Holder</option>
          <option value="Other">Other</option>
        </select>

        <label className="block mt-4 font-bold text-[18px]">Address *</label>
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-3 border rounded" required />
        <label className="block mt-4 font-bold text-[18px]">I am interested in *</label>
<select name="interestedIn" value={formData.interestedIn} onChange={handleChange} className="w-full p-3 border rounded">
  <option value="">Select Interest</option>
  <option value="Python & Django">Python & Django</option>
  <option value="MERN Stack">MERN Stack</option>
  <option value="React JS">React JS</option>
  <option value="Python with Data Science">Python with Data Science</option>
  <option value="Front-end Development">Front-end Development</option>
  <option value="Graphic Design">Graphic Design</option>
  <option value="UI/UX">UI/UX</option>
  <option value="App Development">App Development</option>
  <option value="Flutter">Flutter</option>
  <option value="Digital Marketing">Digital Marketing</option>
  <option value="QA">QA</option>
  <option value="Auto CAD">Auto CAD</option>
  <option value="AWS">AWS</option>
  <option value="Etabs">Etabs</option>
  <option value="Sketchup">Sketchup</option>
  <option value="WordPress">WordPress</option>
  <option value="PHP with Laravel">PHP with Laravel</option>
  <option value="Java">Java</option>
  <option value="C Programming">C Programming</option>
  <option value="Python Programming">Python Programming</option>
  <option value="Web Design">Web Design(HTML,CSS & JS)</option>
  <option value="Other">Other</option>
</select>


        <label className="block mt-4 font-bold text-[18px]">Your Schedule *</label>
        <div>
          <input type="radio" name="schedule" value="Morning" onChange={handleRadioChange} /> Morning<br />
          <input type="radio" name="schedule" value="Day" onChange={handleRadioChange} /> Day<br />
          <input type="radio" name="schedule" value="Evening" onChange={handleRadioChange} /> Evening
        </div>

        <label className="block mt-4 font-bold text-[18px] ">Physical Class (Koteshwor, KTM) OR Online Class *</label>
        <div>
          <input type="radio" name="classType" value="Physical" onChange={handleRadioChange} /> Physical<br />
          <input type="radio" name="classType" value="Online" onChange={handleRadioChange} /> Online
        </div>

        <label className="block mt-4 font-bold text-[18px] ">Do You Require Internship After Training? *</label>
        <div>
          <input type="radio" name="internship" value="Yes" onChange={handleRadioChange} /> Yes<br />
          <input type="radio" name="internship" value="No" onChange={handleRadioChange} /> No
        </div>

        <label className="block mt-4 font-bold text-[18px]">Any Queries?</label>
        <textarea name="queries" value={formData.queries} onChange={handleChange} className="w-full p-3 border rounded" placeholder="Your queries..."></textarea>

        <button type="submit" className="bg-blue-700 hover:bg-purple-950 text-white px-4 py-2 rounded mt-6">Register</button>
      </form>
    </div>
  );
};

export default Register;
