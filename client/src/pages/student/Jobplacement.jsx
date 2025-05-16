import { useState } from 'react';
import { FaBuilding, FaHandshake, FaGraduationCap, FaFileAlt, FaBriefcase, FaUsers } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const jobsData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    deadline: '2023-10-15',
    description: 'We are looking for an experienced Frontend Developer proficient in React, TypeScript, and modern CSS frameworks.',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    email: "example@gmail.com",
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataFlow Systems',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    deadline: '2023-10-20',
    description: 'Join our team as a Backend Engineer to develop scalable APIs and microservices using Node.js and PostgreSQL.',
    skills: ['Node.js', 'PostgreSQL', 'Docker'],
    email: "example@gmail.com",
  },
  {
    id: 3,
    title: 'DevOps Specialist',
    company: 'CloudNative Inc.',
    location: 'Austin, TX',
    type: 'Contract',
    salary: '$60 - $75 per hour',
    deadline: '2023-09-30',
    description: 'Looking for a DevOps specialist to improve our CI/CD pipelines and cloud infrastructure on AWS.',
    skills: ['AWS', 'Kubernetes', 'Terraform'],
    email: "example@gmail.com",
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$95,000 - $125,000',
    deadline: '2023-10-25',
    description: 'Seeking a talented Full Stack Developer to work on our customer-facing web applications using modern technologies.',
    skills: ['React', 'Node.js', 'MongoDB'],
    email: "example@gmail.com",
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The career services team was instrumental in helping me land my dream job at Google. Their mock interviews and resume review sessions prepared me perfectly for the hiring process.",
    rating: 5,
    placement: "Hired within 2 months of program completion"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/men/92.jpg",
    quote: "I was struggling to break into tech after transitioning from a non-tech field. The placement team connected me with the right opportunities and now I'm working at Microsoft!",
    rating: 5,
    placement: "Hired within 6 weeks of program completion"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Data Scientist",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "The personalized career coaching and networking events organized by the team gave me a competitive edge. I received multiple job offers and chose Amazon.",
    rating: 5,
    placement: "Hired within 3 months of program completion"
  },
  {
    id: 4,
    name: "David Kim",
    role: "DevOps Engineer",
    company: "Netflix",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The industry partnerships they've cultivated are incredible. I was introduced to my current employer through one of their networking events.",
    rating: 4,
    placement: "Hired within 1 month of program completion"
  },
];

const caseStudies = [
  {
    id: 1,
    title: "From Retail to Tech: A Career Transformation",
    name: "James Wilson",
    before: "Retail Store Manager",
    after: "Frontend Developer at Shopify",
    salary: "120% salary increase",
    duration: "9 months",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    description: "After 8 years in retail management, James enrolled in our program with no prior coding experience. Through dedicated training and our placement services, he landed a role at Shopify."
  },
  {
    id: 2,
    title: "Accelerating a Junior Developer's Career",
    name: "Priya Patel",
    before: "Junior Developer at a startup",
    after: "Senior Developer at Adobe",
    salary: "85% salary increase",
    duration: "6 months",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    description: "Priya had some development experience but was stuck in a junior role. Our advanced training and career coaching helped her rapidly progress to a senior position at Adobe."
  }
];

const Jobplacement = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prevActive) => 
      prevActive === testimonials.length - 1 ? 0 : prevActive + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prevActive) => 
      prevActive === 0 ? testimonials.length - 1 : prevActive - 1
    );
  };

  const partnerships = [
    { name: "Google", logo: "https://static.vecteezy.com/system/resources/thumbnails/046/861/647/small_2x/google-logo-transparent-background-free-png.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" },
  ];

  const services = [
    {
      title: "Resume Building",
      description: "Professional assistance in creating industry-standard resumes that highlight your skills and experience.",
      icon: <FaFileAlt className="w-10 h-10 text-career-600" />
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and feedback sessions to prepare you for technical and behavioral interviews.",
      icon: <FaUsers className="w-10 h-10 text-career-600" />
    },
    {
      title: "Career Counseling",
      description: "One-on-one counseling sessions to help you define and achieve your career goals.",
      icon: <FaGraduationCap className="w-10 h-10 text-career-600" />
    },
    {
      title: "Job Matching",
      description: "Personalized job recommendations based on your skills, experience, and preferences.",
      icon: <FaBriefcase className="w-10 h-10 text-career-600" />
    },
    {
      title: "Networking Events",
      description: "Regular networking events to connect with industry professionals and potential employers.",
      icon: <FaHandshake className="w-10 h-10 text-career-600" />
    },
    {
      title: "Company Visits",
      description: "Organized visits to partner companies to understand their work culture and requirements.",
      icon: <FaBuilding className="w-10 h-10 text-career-600" />
    }
  ];

  return (

    <div>
      <section id="placement" className="py-16 bg-[#3c1f9d] px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16  text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Placement Assistance</h2>
            <p className="text-lg  max-w-3xl mx-auto">
              We're committed to helping you succeed in your tech career through comprehensive placement services and strong industry partnerships.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center  text-white">Our Industry Partnerships</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partnerships.map((partner, index) => (
                <div key={index} className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Placement Services Offered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-[#7d60de] text-white rounded-lg">
                  <div className="p-6">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-black ">{service.title}</h4>
                    <p className="text-white">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="jobs" className="py-16 px-4 bg-[#3c1f9d]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">IT Job Listings</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Browse through our curated list of IT job openings from our partner companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobsData.map((job) => (
              <div key={job.id} className=" rounded-lg p-6 hover:shadow-md transition-shadow bg-[#7d60de]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-career-700 text-black">{job.title}</h3>
                    <p className="text-white mt-1">{job.company}</p>
                  </div>
                  <FaBriefcase className="text-career-600 text-white text-2xl" />
                </div>
                <div className="space-y-4">
                  <p className="text-white">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="bg-career-100 text-career-700 px-3 py-1 rounded-full ">
                        {skill}
                      </span>
                    ))}
                  </div>
                 
                  <div className="grid grid-cols-2 gap-2 text-sm text-white">
                    <div className="flex items-center gap-1">
                      <MdEmail className="text-sm" />
                      <span>{job.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBuilding className="text-sm" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBriefcase className="text-sm" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>$</span>
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <span>⏰</span>
                      <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="success-stories" className="py-16 bg-career-50 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Alumni Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our successful graduates who have transformed their careers through our program and placement assistance.
            </p>
          </div>

          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
                <button 
                  onClick={prevTestimonial} 
                  className="p-2 bg-white rounded-full shadow-md text-career-700 hover:text-career-900 pointer-events-auto"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextTestimonial} 
                  className="p-2 bg-white rounded-full shadow-md text-career-700 hover:text-career-900 pointer-events-auto"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="overflow-hidden rounded-xl">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`transition-opacity duration-500 ${
                      index === activeTestimonial ? 'opacity-100' : 'opacity-0 hidden'
                    }`}
                  >
                    <div className="bg-white border-none shadow-lg">
                      <div className="p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-career-100">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow text-center md:text-left">
                            <div className="flex justify-center md:justify-start mb-2">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="italic text-gray-700 text-lg mb-4">"{testimonial.quote}"</p>
                            <div>
                              <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                              <p className="text-career-600">{testimonial.role} at {testimonial.company}</p>
                              <p className="text-sm text-gray-500 mt-1">{testimonial.placement}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeTestimonial ? 'bg-career-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Career Transformation Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-lg">
                  <div className="p-0">
                    <div className="bg-career-700 text-white p-4">
                      <h4 className="text-xl font-semibold">{caseStudy.title}</h4>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={caseStudy.image} 
                          alt={caseStudy.name} 
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-semibold text-lg">{caseStudy.name}</h5>
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="line-through">{caseStudy.before}</span>
                            <span className="mx-2">→</span>
                            <span className="font-medium text-career-600">{caseStudy.after}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-career-50 p-3 rounded">
                          <span className="block text-gray-500">Salary Increase</span>
                          <span className="font-semibold text-career-700">{caseStudy.salary}</span>
                        </div>
                        <div className="bg-career-50 p-3 rounded">
                          <span className="block text-gray-500">Transition Time</span>
                          <span className="font-semibold text-career-700">{caseStudy.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  
  );
};

export default Jobplacement;