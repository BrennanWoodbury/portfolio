import styles from "../socials/page.module.css";
import React from "react";


export default function Page() {


  return (
    <div className={styles.content}>
      <h1>My Socials</h1>
      <img src={"/images/snapchat.svg"} alt={"snapchat"} style={{height: '4rem'}}/>
      <a href={"https://snapchat.com/t/JBeHXZdo"}>@brennan_w22</a>
      <img src={"/images/instagram.svg"} alt="instagram" style={{height: '3rem'}}/>
      <a href={"https://www.instagram.com/wrennanboodbury/"}>@WrennanBoodbury</a>
      <img src={"/images/twitter.svg"} alt="X" style={{height: '3rem'}}/>
      <a href={"https://x.com/BrennanWoodbury"}>@BrennanWoodbury</a>
    </div>
  )
}
