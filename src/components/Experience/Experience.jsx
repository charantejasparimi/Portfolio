import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";  
import skills from "../../data/skills.json";

const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Tech Stack</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skillCard}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p className={styles.skillTitle}>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
