import React, { useState } from 'react';
import './App.css';
import './index.css';
import { Navbar, AboutMe, Services } from './components';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='transition-colors duration-700 bg-white px-6 dark:bg-slate-800 dark:transition-colors dark:duration-500'>
        <section className='min-h-screen'>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <AboutMe darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>
        <Services darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default App;
