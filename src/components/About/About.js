import React from 'react';
import styles from './About.module.css'; // Assuming you're using CSS modules

const About = ({ image = "https://via.placeholder.com/215", about }) => (
  <aside className={styles.about}>
    <img src={image} alt="blog logo" />
    <p>{about}</p>
  </aside>
);

export default About;
