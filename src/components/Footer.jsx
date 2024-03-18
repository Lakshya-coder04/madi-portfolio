import React from 'react';
import images from '../images/images';

const Footer = () => {
  return (
    <div>
      <div class='bg-gray-950 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center lg:gap-5 xl:px-48'>
        <div class='mt-4 mb-7 lg:mb-0 lg:w-1/2 mx-auto'>
          <iframe
            title='maps'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.627488598531!2d-104.61766512344181!3d50.4666610715952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e4fa75bc657%3A0x6f6c8a0e2b3a1bc4!2sCrown%20Appraisals!5e0!3m2!1sen!2sca!4v1708812970161!5m2!1sen!2sca'
            class='h-52 w-full focus:outline-none lg:h-80 lg:ml-5 lg:mx-auto'
            style={{ border: '0' }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        <div class='lg:w-1/2'>
          <div class='my-5 flex flex-col items-center'>
            <h1 class='text-xl text-teal-300 font-extrabold tracking-wider'>
              Address:
            </h1>
            <p class='text-lg text-white'>2350 2nd Ave, Regina, SK S4R 1A5</p>
          </div>

          <div className='flex flex-col items-center'>
            <h1 class='text-xl text-teal-300 font-extrabold tracking-wider'>
              Opening Hours:{' '}
            </h1>
            <p class='text-lg text-white'>Mon - Fri: 9 Am - 4:30 Pm</p>
            <p class='text-lg text-white'>Sat - Sun: Closed</p>
          </div>
        </div>
      </div>
      <div className='py-10 flex flex-col items-center lg:flex lg:flex-row lg:justify-around lg:items-center bg-gray-950'>
        <img className='w-80 lg:w-1/4' src={images.aic} alt='aic' />
        <img
          className='w-32 lg:w-1/6'
          src={images.crownappraisaltransparent}
          alt=''
        />
        <img
          className='w-64 lg:w-1/6'
          src={images.partnerstransparent}
          alt=''
        />
      </div>

      <div className='text-center'>
        <p className='text-sm bg-gray-950 lg:text-md text-gray-500 pt-8 pb-5 '>
          © 2024 Crown Appraisals Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
