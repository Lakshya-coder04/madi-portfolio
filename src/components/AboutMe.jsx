import React from 'react';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from 'react-icons/ai';
import images from '../images/images';

const AboutMe = ({ darkMode, setDarkMode }) => {
  return (
    <div className='pt-10 flex flex-col '>
      <h1 className='text-slate-800 text-3xl font-bold self-center lg:self-start dark:text-gray-100'>
        {' '}
        About Us
      </h1>
      <div className='flex flex-col items-center lg:flex-row'>
        <div className='overflow-hidden mx-auto flex justify-center relative bg-gradient-to-b from-blue-500 to-teal-400 rounded-full w-10/12 h-auto my-10 sm:w-3/5 md:w-3/5'>
          <img src={images.madiBg} alt='Madison' className='object-cover' />
        </div>
        <div className='info'>
          <div className='text-4xl flex justify-center items-center gap-10 text-gray-500 md:text-4xl'>
            <AiFillFacebook className='cursor-pointer hover:text-facebook' />
            <AiFillInstagram className='cursor-pointer  hover:text-instagram' />
            <AiFillLinkedin className='cursor-pointer hover:text-linkedin' />
            <AiFillMail className='cursor-pointer hover:text-red-600' />
            <AiFillPhone className='cursor-pointer hover:text-green-600' />
          </div>
          <div className='text-center p-10'>
            <h1 className='text-3xl text-blue-500 font-bold tracking-wide md:text-4xl lg:text-5xl'>
              Madison Matthews
            </h1>
            <h2 className='text-2xl py-2 dark:text-gray-100 md:text-3xl'>
              Home Appraiser
            </h2>
            <p className='py-3 text-center text-gray-400 text-xl leading-8 tracking-wide dark:text-gray-300'>
              Hey there! I'm Madison Matthews, specializing in crafting
              comprehensive appraisal reports and market rent assessments.
            </p>
          </div>
        </div>
      </div>
      <div className='brent '>
        <div className='flex flex-col items-center lg:flex-row'>
          <div className='overflow-hidden mx-auto flex justify-center relative bg-gradient-to-b from-blue-500 to-teal-400 rounded-full w-10/12 my-5 sm:w-3/5 md:w-3/5 lg:w-full lg:h-auto'>
            <img
              src={images.randomguy}
              alt='Madison'
              className=' object-cover w-full'
            />
          </div>
          <div className='info'>
            <div className='text-center p-10'>
              <h1 className='text-3xl text-blue-500 font-bold tracking-wide md:text-4xl lg:text-5xl'>
                Brent Machuk
              </h1>
              <p className='py-3 text-gray-400 text-xl leading-8 tracking-wide dark:text-gray-300'>
                Howdy, I am Brent Machuk. I am member of the Appraisal Institute
                of Canada since 2006. I holds the{' '}
                <span className='font-bold'>
                  CRA (Canadian Residential Appraiser)
                </span>{' '}
                designation and the P. App. designation (Professional
                Appraiser).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
