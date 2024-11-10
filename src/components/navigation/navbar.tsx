import React from 'react';
import styles from './navbar.module.css'

export default function Navbar(): React.ReactNode {
  return (
    <div className={styles.navbar}>
      <a href={"/"}><img src={"/svg/terminal.svg"} alt="terminal" /></a>
      <div className={styles.spacer}></div>
      <ul>
        <li><a href={"/"}>Home</a></li>
        <li><a href={"/contact"}>Contact</a></li>
        <li><a href={"/projects"}>Projects</a></li>
      </ul>

    </div>
  )
}
