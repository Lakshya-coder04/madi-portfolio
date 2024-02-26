import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import images from '../images/images';

const Services = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (index) => {
    setIsOpen((prevState) => {
      // Create a new state object
      const newState = {};

      // Set all accordion items to closed (false)
      Object.keys(prevState).forEach((key) => {
        newState[key] = false;
      });

      // Toggle the state of the clicked accordion item
      newState[index] = !prevState[index];

      return newState; // Return the new state
    });
  };

  return (
    <div>
      <section className='mt-10'>
        <div>
          <h2 className='text-3xl text-slate-800 font-bold dark:text-gray-100 text-center lg:text-left'>
            Services We Offer
          </h2>
          <p className='py-5 text-gray-600 text-xl leading-8 tracking-wide dark:text-gray-200'>
            Since starting my Career as a{' '}
            <span className=' text-blue-500 font-bold'>Home Appraiser</span>,
            below are the wide range of{' '}
            <span className=' text-blue-500 font-bold'>Services</span> I offer:
          </p>
          <ul className='list-none'>
            <li>
              <img
                src={images.residential}
                className='w-full h-auto m-auto py-5 brightness-110'
                alt='property'
              />
              <div
                className='flex justify-between items-center bg-black text-white focus:outline-none cursor-pointer select-none hover:bg-blue-500 transition-colors duration-300'
                onClick={() => toggleAccordion('residential')}
              >
                <span className='flex items-center gap-10 text-xl py-2 px-2 m-5'>
                  Residential Appraisals
                  <button>
                    {isOpen['residential'] ? <FaMinus /> : <FaPlus />}
                  </button>
                </span>
              </div>
              {isOpen['residential'] && (
                <p className='text-lg text-gray-600 py-2 px-4 dark:text-gray-200'>
                  Having specialized in the appraisal of agricultural and rural
                  real estate including the valuation of hundreds of
                  agricultural and rural properties across Saskatchewan and
                  Manitoba, Crown Appraisals is committed to providing
                  independent, high quality real estate appraisal and consulting
                  services regarding rural & agricultural properties throughout
                  Saskatchewan and Manitoba.
                </p>
              )}
            </li>
            <li>
              <img
                src={images.acre}
                className='w-full h-auto m-auto py-5 brightness-110'
                alt='property'
              />
              <div
                className='flex items-center justify-between bg-black text-white focus:outline-none cursor-pointer select-none hover:bg-blue-500 transition-colors duration-300'
                onClick={() => toggleAccordion('acre')}
              >
                <span className='flex items-center gap-10 text-xl py-2 px-2 m-5'>
                  Acerages
                  <button>{isOpen['acre'] ? <FaMinus /> : <FaPlus />}</button>
                </span>
              </div>
              {isOpen['acre'] && (
                <p className='text-lg text-gray-600 py-2 px-4 dark:text-gray-200'>
                  Having specialized in the appraisal of agricultural and rural
                  real estate including the valuation of hundreds of
                  agricultural and rural properties across Saskatchewan and
                  Manitoba, Crown Appraisals is committed to providing
                  independent, high quality real estate appraisal and consulting
                  services regarding rural & agricultural properties throughout
                  Saskatchewan and Manitoba.
                </p>
              )}
            </li>
            <li>
              <img
                src={images.rec}
                className='w-full h-auto m-auto py-5'
                alt='property'
              />
              <div
                className='flex items-center bg-black text-white focus:outline-none cursor-pointer select-none hover:bg-blue-500 transition-colors duration-300'
                onClick={() => toggleAccordion('Recreational')}
              >
                <span className='flex items-center gap-10 text-xl py-2 px-2 m-5'>
                  Recreational Property
                  <button>
                    {isOpen['Recreational'] ? <FaMinus /> : <FaPlus />}
                  </button>
                </span>
              </div>
              {isOpen['Recreational'] && (
                <p className='text-lg text-gray-600 py-2 px-4 dark:text-gray-200'>
                  Having specialized in the appraisal of agricultural and rural
                  real estate including the valuation of hundreds of
                  agricultural and rural properties across Saskatchewan and
                  Manitoba, Crown Appraisals is committed to providing
                  independent, high quality real estate appraisal and consulting
                  services regarding rural & agricultural properties throughout
                  Saskatchewan and Manitoba.
                </p>
              )}
            </li>
            <li>
              <img
                src={images.construction}
                className='w-full h-auto m-auto py-5 brightness-110'
                alt='property'
              />
              <div
                className='flex items-center bg-black text-white focus:outline-none cursor-pointer select-none hover:bg-blue-500 transition-colors duration-300'
                onClick={() => toggleAccordion('newConstruction')}
              >
                <span className='flex items-center gap-10 text-xl py-2 px-2 m-5'>
                  New Construction
                  <button>
                    {isOpen['newConstruction'] ? <FaMinus /> : <FaPlus />}
                  </button>
                </span>
              </div>
              {isOpen['newConstruction'] && (
                <p className='text-lg text-gray-600 py-2 px-4 dark:text-gray-200'>
                  Having specialized in the appraisal of agricultural and rural
                  real estate including the valuation of hundreds of
                  agricultural and rural properties across Saskatchewan and
                  Manitoba, Crown Appraisals is committed to providing
                  independent, high quality real estate appraisal and consulting
                  services regarding rural & agricultural properties throughout
                  Saskatchewan and Manitoba.
                </p>
              )}
            </li>
            <li>
              <img
                src={images.market}
                className='w-full h-auto m-auto py-5 brightness-125'
                alt='property'
              />
              <div
                className='flex items-center bg-black text-white focus:outline-none cursor-pointer select-none hover:bg-blue-500 transition-colors duration-300'
                onClick={() => toggleAccordion('market')}
              >
                <span className='flex items-center gap-10 text-xl py-2 px-2 m-5'>
                  Market Rent Analysis
                  <button>{isOpen['market'] ? <FaMinus /> : <FaPlus />}</button>
                </span>
              </div>
              {isOpen['market'] && (
                <p className='text-lg text-gray-600 py-2 px-4 dark:text-gray-200'>
                  Having specialized in the appraisal of agricultural and rural
                  real estate including the valuation of hundreds of
                  agricultural and rural properties across Saskatchewan and
                  Manitoba, Crown Appraisals is committed to providing
                  independent, high quality real estate appraisal and consulting
                  services regarding rural & agricultural properties throughout
                  Saskatchewan and Manitoba.
                </p>
              )}
            </li>
            <li>
              <img
                src={images.disaster}
                className='w-full h-auto m-auto py-5 brightness-110'
                alt='property'
              />
              <div
                className='flex items-center bg-black text-white focus:outline-none cursor-pointer select-none hover:bg-blue-500 transition-colors duration-300'
                onClick={() => toggleAccordion('insurance')}
              >
                <span className='flex items-center gap-10 text-xl py-2 px-2 m-5'>
                  Insurance Appraisals
                  <button>
                    {isOpen['insurance'] ? <FaMinus /> : <FaPlus />}
                  </button>
                </span>
              </div>
              {isOpen['insurance'] && (
                <p className='text-lg text-gray-600 py-2 px-4 dark:text-gray-200'>
                  Having specialized in the appraisal of agricultural and rural
                  real estate including the valuation of hundreds of
                  agricultural and rural properties across Saskatchewan and
                  Manitoba, Crown Appraisals is committed to providing
                  independent, high quality real estate appraisal and consulting
                  services regarding rural & agricultural properties throughout
                  Saskatchewan and Manitoba.
                </p>
              )}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
