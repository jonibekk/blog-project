import React from 'react'

import SideBar from '../SideBar'

import styles from './style.css'

const Layout = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
      <SideBar width={props.sideWidth}/>
    </div>
  )
}

export default Layout;
