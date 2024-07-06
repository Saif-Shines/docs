import React from 'react';
import styles from './ActionCard.module.css';

const ActionCard = ({ title, description, buttonText, buttonLink, color }) => (
  <div className={`${styles.card} ${styles[color]}`}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <a href={buttonLink} className={styles.button}>
      {buttonText}
    </a>
  </div>
);

export default ActionCard;