import React, { useState } from 'react';
import letter from './letter.json';
import Lottie from 'lottie-react';

const ContactUs = ({ darkMode, setDarkMode }) => {
  var key = 'fc155ea8-a20e-4b80-bafa-144086ccad05';

  // State variables for message and input values
  const [messageSent, setMessageSent] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // Message sent successfully
      setMessageSent(true);
      // Clear input values
      setInputs({
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        message: '',
      });
      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    }
  };

  return (
    <div className='flex flex-col md:flex-row lg:flex-row'>
      <Lottie animationData={letter} className='lg:w-3/4' />

      <div className='mt-10 flex flex-col '>
        <h1 className='text-3xl text-slate-800 font-bold dark:text-gray-100'>
          Contact Us
        </h1>

        <form
          onSubmit={onSubmit}
          className='my-5 max-w-md mx-auto lg:max-w-2xl flex flex-col'
        >
          <input type='hidden' name='access_key' value={key} />
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='email'
              name='email'
              id='email'
              value={inputs.email}
              onChange={handleInputChange}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              for='email'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Email address
            </label>
          </div>

          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                name='first_name'
                id='first_name'
                value={inputs.first_name}
                onChange={handleInputChange}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                for='first_name'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                First name
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                name='last_name'
                id='last_name'
                value={inputs.last_name}
                onChange={handleInputChange}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                for='last_name'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Last name
              </label>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='tel'
                name='phone'
                id='phone'
                value={inputs.phone}
                onChange={handleInputChange}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                for='phone'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Phone number (306-xxx-xxxx)
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <textarea
                name='message'
                id='message'
                cols='0'
                rows='0'
                value={inputs.message}
                onChange={handleInputChange}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              ></textarea>
              <label
                for='message'
                className=' peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Your Message
              </label>
            </div>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>

          {/* Display message sent */}
          {messageSent && (
            <div className='flex items-center'>
              <p className=' my-5 max-w-full font-bold text-2xl text-green-600'>
                Message Sent. We will get back to you within a Day!!
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
