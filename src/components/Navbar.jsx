import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import images from '../images/images';
import 'animate.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div>
      <nav className='flex justify-between items-center py-5 mb-0 lg:px-6'>
        <img
          src={
            !darkMode ? images.crownappraisal : images.crownappraisaltransparent
          }
          alt='logo'
          className='w-20 lg:w-24 xl:w-36'
        />
        {darkMode ? (
          <BsFillSunFill
            className='cursor-pointer text-2xl dark:text-yellow-400 lg:flex-1 lg:text-4xl'
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <BsFillMoonStarsFill
            className='cursor-pointer text-2xl lg:flex-1 lg:text-3xl'
            onClick={() => setDarkMode(!darkMode)}
          />
        )}

        <ul className='hidden md:flex md:justify-between md:items-center md:flex-2 md:gap-7'>
          <li className='text-md text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 lg:text-xl '>
            <a href='#aboutme'>About Me</a>
          </li>
          <li className='text-md text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 lg:text-xl'>
            <a href='#services'>Services</a>
          </li>
          <li className='text-md text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 lg:text-xl'>
            <a href='#aboutme'>Contact</a>
          </li>
          <li className=' text-md text-slate-50 md:bg-gradient-to-b from-blue-500 to-teal-400 px-3 py-2 rounded-full lg:lg:text-xl'>
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
                className='text-white ease-in duration-300 absolute top-10 right-10 cursor-pointer hover:text-gray-400 hover:transition-colors hover:duration-300'
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
    </div>
  );
};

export default Navbar;
