import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import { DNA} from 'react-loader-spinner';
import Achievements from './components/Achievements/Achievements';
import Education from './components/Education/Education';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('Loading started'); // Check if this logs
    // Callback function executed after rendering
    const timeoutId = setTimeout(() => {
      setLoading(false);
      console.log('Loading finisheds'); // Check if this logs
    }, 1000); // Set timeout to 0 to execute after rendering

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loaderContainer}>
        <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      </div>
      ) : (
        <div className={styles.App}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Achievements/>
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
