import React from 'react';
import Lottie from 'lottie-react';
import house from './house.json';

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <div className='flex flex-col justify-center items-center lg:justify-between lg:flex-row lg:px-6'>
      <Lottie className='mr-5 lg:flex-1 lg:max-w-full' animationData={house} />
      <h1 className='flex-1 font-semibold text-left dark:text-white text-4xl tracking-wide leading-10 lg:text-5xl xl:text-6xl'>
        {' '}
        THE PRARIE APPPRAISERS <br />
        <h1 className='py-5 text-xl xl:text-3xl text-balance'>
          Serving Regina and Southern Saskatchewan
        </h1>
      </h1>
    </div>
  );
};

export default Hero;
