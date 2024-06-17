import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      institution: 'Vishnu Institute of Technology, Bhimavaram',
      period: '2021 - 2025',
      degree: 'B.Tech in Computer Science & Engineering',
      score: '8.8/10 CGPA',
    },
    {
      institution: 'Sasi Junior College, Visakhapatnam',
      period: '2019 - 2021',
      degree: 'Intermediate',
      score: '95.1%',
    },
    {
      institution: 'Sri Chaitanya Techno School, Anakapalli',
      period: '2017 - 2019',
      degree: 'Secondary',
      score: '9.5 CGPA',
    },
  ];

  return (
    <div className={styles.container} id='education'>
      <h2 className={styles.heading}>Education</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Institution</th>
            <th>Period</th>
            <th>Degree</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((edu, index) => (
            <tr key={index}>
              <td>{edu.institution}</td>
              <td>{edu.period}</td>
              <td>{edu.degree}</td>
              <td>{edu.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Education;
