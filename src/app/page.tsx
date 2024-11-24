'use client';

import React from 'react';
import styles from './page.module.css';
import Typewriter from "@/utils/typewriter";

export default function Page(): React.ReactNode {
  const text = "I'm Brennan, a full stack developer specializing in building modern web applications " +
    "with React, TypeScript, and C#. I turn complex problems into elegant solutions. " +
    "I'm passionate about building software that not only solves problems but also makes a positive impact on the world." +
    "\n\n\n" +
    "I live in Utah and like to spend my free time rock climbing, hiking, playing video games, and spending time with my" +
    " cat and two children.";
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <h1>Brennan Woodbury</h1>
        <h2>Software Engineer</h2>
        <div className={`${styles.technologyTags}`}>
          <div className={`cSharpTag technologyTag`}>C#</div>
          <div className={`typeScriptTag technologyTag`}>TypeScript</div>
          <div className={`nextJsTag technologyTag`}>NextJS</div>
          <div className={`javascriptTag technologyTag`}>JavaScript</div>
          <div className={`pythonTag technologyTag`}>Python</div>
          <div className={`sqlTag technologyTag`}>SQL</div>
        </div>
        {/*<h3>C# | TypeScript | Go | JavaScript | NextJs | Python | SQL</h3>*/}
        <div className={styles.cardContent}>
          <img src={"/images/frontshot1.JPG"} alt="Brennan Woodbury"/>
          <div>
            {innerWidth > 768 ? (
                <Typewriter text={text} speed={10} delay={1500}/>) :
              (
                <p style={{whiteSpace: 'pre-line'}}>
                  {text}
                </p>
              )
            }
            {/*<p>{text}</p>*/}

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
