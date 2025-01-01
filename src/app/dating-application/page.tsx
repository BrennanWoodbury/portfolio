import React from "react";
import styles from "./page.module.css";
import DatingApplication from "@/components/datingApplication/datingApplication";

export default function Page(): React.ReactNode {
  const text: string =
    "Welcome to my dating application! My name's Brennan, and I'm interested in taking you out sometime. If " +
    "that sounds interesting to you, fill out the form below and lets go out!"

  return (
    <div className={styles.content}>
      <img src={"/images/frontshot1.jpg"} alt={"Picture of Brennan"}/>
      <div className={styles.blurb}>
        {text}
      </div>
      <DatingApplication/>

    </div>
  );
}
