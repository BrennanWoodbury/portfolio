import React from 'react';
import styles from './page.module.css'

export default function Page(): React.ReactNode {

  return (
    <div className={styles.content}>

      <div className={`${styles.project}`}>
        <h2>Audio and Video Transcription</h2>
        <p>I wrote a tool that takes a video or audio file and transcribes the audio with timestamps.
          Additionally, for my use case, I also had it wipe out any string of numbers and replace them with 9&#39;s
          to protect any sensitive data. </p>
        <span style={{margin: '1rem', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'underline'}}><a
          href={"https://github.com/BrennanWoodbury/transcribe_calls"}>Github</a></span>
        <div className={`${styles.technologyTags}`}>
          <div className={`technologyTag pythonTag`}>Python</div>
          <div className={`aiTag technologyTag`}>Ai</div>

        </div>
      </div>
      <div className={`${styles.project}`}>
        <h2>Jellyfin</h2>
        <p>I have contributed to the open source project &#34;Jellyfin&#34; </p>
        <span style={{margin: '1rem', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'underline'}}><a
          href={"https://github.com/jellyfin/jellyfin"}>Github</a></span>
        <div className={`${styles.technologyTags}`}>
          <div className={`cSharpTag technologyTag`}>C#</div>
          <div className={`sqlTag technologyTag`}>SQL</div>
          <div className={`reactTag technologyTag`}>React</div>
          <div className={`javascriptTag technologyTag`}>JavaScript</div>
          <div className={`htmlTag technologyTag`}>HTML</div>
          <div className={"cssTag technologyTag"}>CSS</div>
        </div>
      </div>
      <div className={`${styles.project}`}>
        <h2>Keeper Commander</h2>
        <p>There was a change that I needed while using the Keeper Vault interface -- the Keeper Commander --
          so I went and made that change myself, and pushed it to the open source project.
        </p>
        <span style={{margin: '1rem', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'underline'}}><a
          href={"https://github.com/Keeper-Security/Commander"}>Github</a></span>
        <div className={`${styles.technologyTags}`}>
          <div className={`technologyTag pythonTag`}>Python</div>
        </div>
      </div>
      <div className={`${styles.coachingSite} ${styles.project}`}>
        <h2>Website for a Client</h2>
        <p>A website built for a life coach, Frontend built with NextJS, backend is an asp.NET web api. </p>
        <img src={"/images/moms_site.png"} alt="Clients site" className={styles.coachingSiteImg}/>
        <div className={styles.technologyTags}>
          <div className={"nextJsTag technologyTag"}>NextJS</div>
          <div className={"typeScriptTag technologyTag"}>TypeScript</div>
          <div className={"cssTag technologyTag"}>CSS</div>
          <div className={"htmlTag technologyTag"}>HTML</div>
          <div className={"cSharpTag technologyTag"}>C#</div>
          <div className={"postgresTag technologyTag"}>PostgreSQL</div>
          <div className={"sqlTag technologyTag"}>SQL</div>
        </div>
      </div>
    </div>
  )
}
