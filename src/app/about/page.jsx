import styles from './page.module.css';
import React from "react";

export default function Page() {

  const aboutMe1 =
    "Hi, I’m Brennan! I’m 28, and when I’m not tackling work projects, " +
    "I’m out living life to the fullest. Whether I’m scaling rock walls at the climbing gym, " +
    "jamming out on my guitar or piano, or racing on a dirt bike, I’m all about " +
    "adventure and creativity. I like to read and write and I love spending time " +
    "with friends and finding new ways to keep life exciting. " +
    "Work keeps me busy, but I always make time to enjoy the things that bring me joy and keep me energized.";

  const aboutMe2 =
    "I'd love it if you reached out to my socials below, or reached me at my number. "

  return (
    <div className={styles.content}>
      <h1>About Me</h1>
      <img src={"/images/laughing.jpg"} alt={"Headshot"} className={styles.johnnys}/>
      <p>{aboutMe1}</p>
      <img src={"/images/frontshot1.JPG"} alt={"Frontshot"} className={styles.frontshot}/>
      <p>{aboutMe2}</p>
      <img src={"/images/snapchat.svg"} alt={"snapchat"} style={{height: '4rem'}}/>
      <a href={"https://snapchat.com/t/JBeHXZdo"}>@brennan_w22</a>
      <img src={"/images/instagram.svg"} alt="instagram" style={{height: '3rem'}}/>
      <a href={"https://www.instagram.com/wrennanboodbury/"}>@WrennanBoodbury</a>
      <img src={"/images/twitter.svg"} alt="X" style={{height: '3rem'}}/>
      <a href={"https://x.com/BrennanWoodbury"}>@BrennanWoodbury</a>
      <img src={"/images/phone.svg"} alt="phone" style={{height: '2.25rem'}}/>
      <a href={"sms:+14358300726"}>435.830.0726</a>
      <img src={"/images/blake_kissing.jpg"} alt={"Blake and Brennan hanging out"} className={styles.blakeKissing}/>
      <img src={"/images/Headshot_johnnys.JPG"} alt={"Headshot"}/>
    </div>
  )
}
