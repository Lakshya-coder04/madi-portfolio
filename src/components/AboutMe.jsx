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
    <div className='pt-10 flex flex-col lg:px-6'>
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
            <a
              href='https://www.facebook.com/profile.php?id=61553573144794'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillFacebook className='cursor-pointer  transition-colors duration-300 hover:text-facebook' />
            </a>
            <a
              href='https://www.instagram.com/the_prairie_appraiser'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillInstagram className='cursor-pointer transition-colors duration-300  hover:text-instagram' />
            </a>

            <a
              href='https://ca.linkedin.com/in/madison-matthews-ab226589'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillLinkedin className='cursor-pointer  transition-colors duration-300 hover:text-linkedin' />
            </a>
          </div>
          <div className='text-center p-10'>
            <h1 className='text-3xl text-blue-500 font-bold tracking-wide md:text-4xl lg:text-5xl'>
              Madison Matthews
            </h1>
            <h2 className='text-2xl py-2 dark:text-gray-100 md:text-3xl'>
              AIC Candidate Member
            </h2>
            <p className='py-3 text-balance text-gray-400 text-xl leading-8 tracking-wide xl:text-2xl dark:text-gray-300'>
              Hey there! I'm Madison Matthews, specializing in crafting
              comprehensive appraisal reports and market rent assessments.
            </p>
            <div className='flex-col flex text-gray-500 text-2xl xl:text-3xl lg:items-center dark:text-white'>
              <div className='flex items-center justify-start gap-2'>
                <AiFillMail className='cursor-pointer transition-colors duration-300 hover:text-red-600' />
                appraiseregina@gmail.com
              </div>
              <div className='flex items-center justify-start gap-2 dark:text-white'>
                <AiFillPhone className='cursor-pointer transition-colors duration-300 hover:text-green-600' />
                306-552-3889
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='brent '>
        <div className='flex flex-col items-center lg:flex-row '>
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
              <h2 className='text-2xl py-2 dark:text-gray-100 md:text-3xl'>
                CRA, P. App
              </h2>
              <p className='py-3 text-gray-400 text-balance text-xl leading-8 tracking-wide xl:text-2xl dark:text-gray-300'>
                Howdy, I am Brent Machuk. I am member of the Appraisal Institute
                of Canada since 2006. I holds the{' '}
                <span className='font-bold'>
                  CRA (Canadian Residential Appraiser)
                </span>{' '}
                designation and the P. App. designation (Professional
                Appraiser).
              </p>
              <div className='flex-col flex lg:items-center text-2xl xl:text-3xl text-gray-500'>
                <div className='flex items-center justify-start gap-2 dark:text-white'>
                  <AiFillMail className=' text-3xl cursor-pointer transition-colors duration-300 hover:text-red-600' />
                  brentm@myaccess.ca
                </div>
                <div className='flex  items-center justify-start gap-2 dark:text-white'>
                  <AiFillPhone className='text-3xl cursor-pointer transition-colors duration-300 hover:text-green-600' />
                  306-591-6367
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
