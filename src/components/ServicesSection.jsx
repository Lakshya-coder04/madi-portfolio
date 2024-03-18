import React from 'react';
import images from '../images/images';
import Slider from 'react-slick';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
// Import Swiper styles

const ServicesSection = ({ darkMode }) => {
  console.log(window.innerWidth);
  function SamplenextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrLinkNext
        className={className}
        style={{
          ...style,
          display: 'block',
          color: darkMode ? '#fff' : '#000',
        }}
        onClick={onClick}
      />
    );
  }
  function SampleprevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrLinkPrevious
        className={className}
        style={{
          ...style,
          display: 'block',
          color: darkMode ? '#fff' : '#000',
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    fade: true,
    adaptiveHeight: true,
    nextArrow: <SamplenextArrow />,
    prevArrow: <SampleprevArrow />,
  };
  return (
    <div className='slider-container xl:px-36'>
      <Slider {...settings}>
        <div>
          <img src={images.residential} alt='house' />
          <div>
            <h1 className='text-center p-2 text-2xl font-bold xl:text-3xl dark:text-white'>
              Residential Properties
            </h1>
            <p className='text-xl text-gray-800 p-2 dark:text-gray-300'>
              From single-family homes to multi-family dwellings, recreational
              properties to new constructions, and even vacant land, our
              services cater to every type of residential property. We
              specialize in various appraisal purposes, including but not
              limited to: <br />{' '}
              <span className='font-bold text-blue-500 tracking-wider'>
                • Marketing and Listing • Mortgage Financing • Estate
                Settlements • Marital Separation • Power of Sale • Matrimonial
                Cases • Foreclosures • Corporate Relocation • Tax and Capital
                Gains
              </span>
            </p>
          </div>
        </div>
        <div>
          <img src={images.acre} alt='acre' />
          <div>
            <h1 className='text-center p-2 text-2xl font-bold xl:text-3xl dark:text-white'>
              Acerages / {window.innerWidth > 450 ? null : <br />} Rural
              Properties
            </h1>
            <p className='text-xl text-gray-800 p-2 dark:text-gray-300'>
              With a wealth of experience in valuing{' '}
              <span className='font-bold text-blue-500 tracking-wider'>
                acreages and rural properties across Saskatchewan,
              </span>{' '}
              our team is dedicated to providing customized solutions tailored
              to your specific valuation requirements. Whether you're dealing
              with vast acres or remote properties, we ensure accuracy and
              reliability in our appraisals.
            </p>
          </div>
        </div>
        <div>
          <img src={images.market} alt='market' />
          <div>
            <h1 className='text-center p-2 text-2xl font-bold xl:text-3xl dark:text-white'>
              Market Rent Analysis
            </h1>
            <p className='text-xl text-gray-800 p-2 dark:text-gray-300'>
              <span className='font-bold text-blue-500 tracking-wider'>
                Curious about the rental potential of your property?
              </span>{' '}
              Perhaps you need a market rent report to secure a mortgage for
              your next rental property. Not all appraisers possess the
              expertise in market rent appraisals, but our team excels in this
              domain. Whether it's single-family homes, apartments,
              condominiums, or duplexes, we provide reliable market rent
              analyses to meet your needs.
            </p>
          </div>
        </div>
        <div>
          <img src={images.disaster} alt='construction' />
          <div>
            <h1 className='text-center p-2 text-2xl font-bold xl:text-3xl dark:text-white'>
              Insurance Appraisals
            </h1>
            <p className='text-xl text-gray-800 p-2 dark:text-gray-300'>
              <span className='font-bold text-blue-500 tracking-wider'>
                For insurance purposes,
              </span>{' '}
              we provide thorough appraisals to ensure your property is
              adequately covered. From assessing property value to determining{' '}
              {''}
              <span className='font-bold text-blue-500 tracking-wider'>
                replacement costs,
              </span>{' '}
              our insurance appraisal services offer peace of mind and{' '}
              <span className='font-bold text-blue-500 tracking-wider'>
                protection for your investments.
              </span>{' '}
              Trust our experienced team to deliver accurate assessments
              tailored to your insurance needs.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ServicesSection;
