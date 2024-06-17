import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
import Modal from './Modal';

const ProjectCard = ({
  project: { title, duration,imageSrc, description, skills, demo, source },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.container}>
      <em className={styles.date}>{duration}</em>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description.substring(0,30)}...</p>
      {description.length > 10 && (
        <span onClick={toggleModal} className={styles.readMore}>
          Read More
        </span>
      )}
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>

      <Modal
        show={isModalOpen}
        onClose={toggleModal}
        title={title}
        description={description}
        skills={skills}
      />
    </div>
  );
};

export default ProjectCard;
