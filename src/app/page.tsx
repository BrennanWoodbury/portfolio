import React from 'react';
import styles from './page.module.css';

export default function Page(): React.ReactNode {
  return (
  <div className={styles.content}>
    <div className={styles.card}>
      <h1>Brennan Woodbury</h1>
      <h2>Software Engineer</h2>
      <h3>C# | TypeScript | JavaScript | NextJs | Python | SQL</h3>
      <div className={styles.cardContent}>
        <img src={"/images/frontshot1.JPG"} alt="Brennan Woodbury" />
        <div>
        <p>
          Hey y&#39;all! I&#39;m Brennan, I grew up in a small town about 40 minutes west of Salt Lake City, Utah.
          I&#39;m a software engineer with a passion for creating and learning. I have a background in web development and
          I&#39;m currently working on expanding my knowledge in software engineering. I have experience in front-end
          development, back-end development, and full-stack development. I have experience with a variety of technologies
          and languages including JavaScript, TypeScript, React, NextJS, C#, NoSQL, SQL, Python, and more. I have a
          passion for creating and learning and I&#39;m always looking for new opportunities to expand my knowledge and
          skills. I love working on projects that challenge me and push me to learn new things. I&#39;m always looking for
          new opportunities to collaborate with other developers and work on exciting projects.

          <br />
          <br />
          Currently I live about 20 minutes north of Salt Lake City with my cat and two children. I love spending time with
          my family, rock climbing, mountain biking, playing video games, and working on personal projects.
        </p>
          <div className={styles.links}>
          <a href={"https://www.github.com/BrennanWoodbury"} target={"_blank"}>Github</a>
          <a href={"https://www.linkedin.com/in/brennan-woodbury-549435bb/" } target={"_blank"}>linkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>



  )
}
