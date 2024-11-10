import React from 'react';
import styles from './page.module.css'

export default function Page(): React.ReactNode {

  return (
    <div className={styles.content}>
      <h1>How to Contact Me</h1>
      <h2>Email Me</h2>
      <p>
        brennanwoodbury@gmail.com
        <br/>
      </p>
      <h2>Reach me by Phone</h2>
      <p>
        +1-435-830-0726
        <br/>
      </p>
      <h2>Find me on LinkedIn</h2>
      <p>
        <a href="https://www.linkedin.com/in/brennan-woodbury-549435bb//">LinkedIn</a>
      </p>
    </div>
  )
}
