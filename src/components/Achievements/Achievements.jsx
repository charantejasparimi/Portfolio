import React from 'react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const honoursAndAwards = [
    "Second Place in ML Hackathon 2k23.",
    "Google Developer Student Club, Secured 15th rank in 24-Hour Hackathon",
    "Solved 100+ DSA problems on Leetcode.",
    "Published Paper on Optimizing Crop Health: Evaluating CNN Performance in Plant Disease Detection in IC4s 2024."
  ];

  const certifications = [
    "NPTEL Certificate: Data Structure and Algorithms Using Java — IIT Kharagpur",
    "NPTEL Certificate: Programming Java — IIT Kharagpur",
    "AIML Virtual Internship Certification accredited by AICTE",
    "Cloud Computing Certification earned through an AICTE-accredited virtual internship"
  ];

  return (
    <div className={styles.container} id='milestones'>
      <div className={styles.section}>
        <h2 className={styles.heading}>Honours and Awards</h2>
        <ul className={styles.list}>
          {honoursAndAwards.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2 className={styles.heading}>Certifications</h2>
        <ul className={styles.list}>
          {certifications.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
