import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  // Safeguard: Return nothing if course data is invalid
  if (!course) return null;

  const rating = calculateRating(course);
  const educatorName = course.educator?.name || "Unknown Educator";
  const price =
    course.coursePrice - (course.discount * course.coursePrice) / 100;

  return (
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    >
      <img className='w-full' src={course.courseThumbnail} alt="Course Thumbnail" />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-500'>{educatorName}</p>

        <div className='flex items-center space-x-2'>
          <p>{rating}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < rating ? assets.star : assets.star_blank}
                alt=''
                className='w-3.5 h-3.5'
              />
            ))}
          </div>
          <p className='text-gray-500'>{course.courseRatings?.length || 0}</p>
        </div>

        <p className='text-base font-semibold text-gray-800'>
          {currency}{price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
