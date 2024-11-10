import React from 'react';
import styles from './footer.module.css'

export default function Footer(): React.ReactNode {
  return (
  <div>
    <footer className={styles.footer}>
      <p>© 2024 Brennan Woodbury</p>
    </footer>
  </div>
  )
}

