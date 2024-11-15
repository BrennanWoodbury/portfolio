'use client';

import React from 'react';
import styles from './page.module.css';
import Typewriter from "@/utils/typewriter";

export default function Page(): React.ReactNode {
  const text = "I'm Brennan, a full stack developer specializing in building modern web applications " +
    "with React, TypeScript, and C#. I turn complex problems into elegant solutions." +
    "I'm passionate about building software that not only solves problems but also makes a positive impact on the world." +
    "\n\n\n" +
    "I live in Utah and like to spend my free time rock climbing, hiking, playing video games, and spending time with my" +
    " cat and two children.";
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <h1>Brennan Woodbury</h1>
        <h2>Software Engineer</h2>
        <h3>C# | TypeScript | Go | JavaScript | NextJs | Python | SQL</h3>
        <div className={styles.cardContent}>
          <img src={"/images/frontshot1.JPG"} alt="Brennan Woodbury"/>
          <div>

            <Typewriter text={text} speed={15} delay={1500}/>

            <div className={styles.links}>
              <a href={"https://www.github.com/BrennanWoodbury"} target={"_blank"}>Github</a>
              <a href={"https://www.linkedin.com/in/brennan-woodbury-549435bb/"} target={"_blank"}>linkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
