import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImg.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a frontend developer, I specialize in crafting responsive and dynamic user interfaces using the latest technologies like React and Vue.js. My focus is on delivering seamless user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                With expertise in backend development, I build robust and scalable server-side applications using Node.js, Express, and Django. My work ensures efficient data management and high performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Database icon" />
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3>
              <p>
                I have extensive experience with database systems like MongoDB, MySQL, and PostgreSQL. I design efficient database schemas and optimize queries to ensure data integrity and fast retrieval.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devopsIcon.png")} alt="DevOps icon" />
            <div className={styles.aboutItemText}>
              <h3>DevOps</h3>
              <p>
                I am proficient in DevOps practices, including CI/CD, containerization with Docker, and cloud services like AWS and Azure. I ensure smooth deployment processes and maintain infrastructure as code.
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default About;
