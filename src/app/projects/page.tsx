import React from 'react';
import styles from './page.module.css'

export default function Page(): React.ReactNode {

  return (
    <div>
      <h1>Projects</h1>
      <div>
        <h2>Website for a Client</h2>
        <p>This was a website I built for a client some years back. </p>
        <img src={"/images/moms_site.png"} alt="Clients site" className={styles.coachingSite}/>
      </div>

    </div>
  )
}
