// src/components/About.tsx
import React from 'react';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          Hello! I'm Sadia Tanzeel, a passionate web developer specializing in front-end technologies like React, Next.js, TypeScript, and Tailwind CSS. I love crafting clean, responsive, and user-friendly websites that solve real-world problems.
        </p>
        <p className={styles.description}>
          With a background in Computer Science, I bring a unique blend of technical skills and creativity to every project. I enjoy learning new technologies, experimenting with innovative ideas, and continuously improving my craft.
        </p>
        <p className={styles.description}>
          When I'm not coding, you can find me to do research in latest technologies. Feel free to connect with me on [LinkedIn, GitHub] to see more of my work!
        </p>
      </div>
    </section>
  );
};

export default About;
