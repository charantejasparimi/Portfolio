import React,{useState,useEffect} from 'react'

import styles from './Hero.module.css'
import {getImageUrl} from '../../utils'
const Hero = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const text = 'Chharan Tejas';
    const interval = 100; // Interval between each character animation in milliseconds

    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex === text.length-1) {
        clearInterval(timer);
      } else {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);
  return (
    <section id="home"className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am 
              <p className={styles.writtingText}>{displayText}</p></h1>
            <p className={styles.Description}>Aspiring Full Stack Developer</p>
            <div className={styles.side}>
            <a href='mailto:parimicharantejas@gmail.com' className={styles.contactBtn}>Contact Me</a>
            <a href='https://drive.google.com/file/d/1wcHdRQDsLwXc2Ce62sw1lr-q8ZhqSX5q/view?usp=sharing' className={styles.contactBtn}>CV 
            <span class="material-symbols-outlined">
download
</span>

            </a>
            </div>
        </div>
        <div className={styles.box}>
        <div>
          
            <img src={getImageUrl("hero/profilepic.jpg")} alt="hero-image" className={styles.heroImg}/>
            <div className='{styles.topBlur}'></div>
            <div className='{styles.bottomBlur}'></div>
            </div>
        </div>
    </section>
  )
}

export default Hero
