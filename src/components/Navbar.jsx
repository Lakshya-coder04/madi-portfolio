import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import images from '../images/images';
import { motion as m } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: 'easeOut' }}
    >
      <nav className='flex justify-between items-center py-10 mb-12'>
        <img
          src={
            !darkMode ? images.crownappraisal : images.crownappraisaltransparent
          }
          alt='logo'
          className='w-20'
        />
        <BsFillMoonStarsFill
          className='cursor-pointer text-2xl dark:text-orange-400 flex-1'
          onClick={() => setDarkMode(!darkMode)}
        />
        <ul className='hidden md:flex md:justify-between md:items-center md:flex-2 md:gap-7'>
          <li className='text-md text-gray-900 dark:text-white'>
            <a href='#aboutme'>About Me</a>
          </li>
          <li className='text-md text-gray-900 dark:text-white'>
            <a href='#services'>Services</a>
          </li>
          <li className='text-md text-gray-900 dark:text-white'>
            <a href='#aboutme'>Contact</a>
          </li>
          <li className=' text-md text-slate-50 md:bg-gradient-to-b from-blue-500 to-teal-400 px-3 py-2 rounded-full'>
            <a href='#aboutme'>Get a Quote</a>
          </li>
        </ul>
        <div className='flex'>
          <GiHamburgerMenu
            className='cursor-pointer dark:text-white md:hidden'
            fontSize={35}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className='fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-teal-400 ease-linear duration-300 flex justify-center text-center items-center flex-col z-10 dark:bg-gradient-to-t dark:from-gray-800 dark:to-gray-900 animate__animated animate__fadeInRight'>
              <RxCross1
                fontSize={40}
                className='text-white ease-in duration-300 absolute top-16 right-5 cursor-pointer hover:text-gray-400 hover:transition-colors hover:duration-300'
                onClick={() => setToggleMenu(false)}
              />
              <ul className='flex flex-col gap-10'>
                <li className='text-3xl text-white px-3 py-2 rounded-lg duration-300 hover:text-gray-400 hover:transition-colors hover:duration-300'>
                  <a href='#aboutme' onClick={() => setToggleMenu(false)}>
                    About Me
                  </a>
                </li>
                <li className='text-3xl text-white px-4 py-2 rounded-lg duration-300 hover:text-gray-400 hover:transition-colors hover:duration-300'>
                  <a href='#services' onClick={() => setToggleMenu(false)}>
                    Services
                  </a>
                </li>
                <li className=' text-3xl text-white px-3 py-2 rounded-lg duration-300 hover:text-gray-400 hover:transition-colors hover:duration-300'>
                  <a href='#aboutme ' onClick={() => setToggleMenu(false)}>
                    Contact
                  </a>
                </li>
                <li className='text-3xl text-white px-4 py-2 rounded-lg duration-300 hover:text-gray-400 hover:transition-colors hover:duration-300'>
                  <a href='#services' onClick={() => setToggleMenu(false)}>
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </m.div>
  );
};

export default Navbar;
