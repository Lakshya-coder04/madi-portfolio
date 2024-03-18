import './ServicesSection';
import ServicesSection from './ServicesSection';

const Services = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <section className='mt-10 lg:px-6'>
        <div>
          <h2 className='text-3xl text-slate-800 font-bold dark:text-gray-100 text-center lg:text-left mb-10'>
            Services We Offer
          </h2>

          <ServicesSection darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </section>
    </div>
  );
};

export default Services;
