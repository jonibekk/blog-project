import React from 'react'

import Navbar from '../Navbar'
import Card from '../UI/Card'
import Logo from '../Logo'

import styles from './style.css'

const Hero = (props) => {
  return (
    <div className={styles.Hero}>
      <Card>
        <div style={{padding: '50px 0'}}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  )
}

export default Hero
