import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ title, subtitle, callToAction }) => (
  <div className={styles.hero}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
    <p className={styles.callToAction}>{callToAction}</p>
  </div>
);

export default Hero;