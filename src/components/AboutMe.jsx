import React from 'react';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai';
import images from '../images/images';
import 'animate.css';
const AboutMe = ({ darkMode, setDarkMode }) => {
  return (
    <div className='animate__animated animate__slideInUp'>
      <div className='text-center p-10'>
        <h1 className='text-5xl text-blue-500 font-bold tracking-wide'>
          Madison Matthews
        </h1>
        <h2 className='text-3xl py-2 dark:text-gray-100'>Home Appraiser</h2>
        <p className='py-5 text-gray-400 text-xl leading-8 tracking-wide dark:text-gray-300'>
          Hey there! I'm Madison Matthews, specializing in crafting
          comprehensive appraisal reports and market rent assessments.
        </p>
      </div>
      <div className='text-5xl flex justify-center items-center gap-16 text-gray-500'>
        <AiFillFacebook className='cursor-pointer hover:text-facebook' />
        <AiFillInstagram className='cursor-pointer  hover:text-instagram' />
        <AiFillLinkedin className='cursor-pointer hover:text-linkedin' />
      </div>
      <div className='overflow-hidden mx-auto flex justify-center relative bg-gradient-to-b from-blue-500 to-teal-400 rounded-full w-9/12 h-auto m-20 md:w-10/12'>
        <img src={images.madiBg} alt='Madison' className='object-cover' />
      </div>
      <section id='aboutme' className='text-center'>
        <div>
          <h2 className='text-3xl font-bold dark:text-gray-100'>About Me</h2>
          <p className='py-5 text-gray-600 text-xl leading-9 tracking-wide dark:text-gray-100'>
            I, Madison, am a dedicated member of the
            <span className='text-blue-500 font-bold'>
              {' '}
              Appraisal Institute of Canada (AIC){' '}
            </span>{' '}
            and am currently pursuing my{' '}
            <span className='text-blue-500 font-bold'>
              Canadian Residential Appraiser (CRA)
            </span>{' '}
            designation. Holding a Bachelor of{' '}
            <span className='text-blue-500 font-bold'>Business degree</span>{' '}
            from the{' '}
            <span className='text-blue-500 font-bold'>
              University of Regina,
            </span>{' '}
            I have been working in the real estate industry since 2017 and
            joined the Appraisal Institute of Canada in 2021. My expertise spans
            a diverse range of property types, including single-family homes,
            duplexes, multi-unit properties, condominiums, acreages, and
            cottages. Operating in Regina and its surrounding areas, I am
            committed to delivering excellence in my services. Known for my
            professionalism and efficiency, I take pride in providing timely and
            personalized reports, ensuring a seamless and reliable experience
            for my clients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
