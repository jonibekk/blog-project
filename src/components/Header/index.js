import React from 'react'

import styles from './style.css'

const Header = (props) => {
  return (
    <header className={styles.Header}>
      <nav className={styles.HeaderMenu}>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
      </nav>
      <div className={styles.SocialMedia}>
        Social Media Links
      </div>
    </header>
  )
}

export default Header;
