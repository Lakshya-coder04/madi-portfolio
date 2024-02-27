import React from 'react';
import Lottie from 'lottie-react';
import house from './house.json';

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row'>
      <Lottie className='m-5 flex-1 lg:max-w-full lg:' animationData={house} />
      <h1 className='flex-1 font-semibold dark:text-white text-3xl tracking-widest leading-10 text-center'>
        {' '}
        Wandering the Prairie, Unveiling Hidden Values: <br />
        <span className='text-blue-500'>
          Your Appraisal Journey Starts Here
        </span>
      </h1>
    </div>
  );
};

export default Hero;
