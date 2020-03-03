import React from 'react'

import Card from '../UI/Card'
import styles from './style.css'

const SideBar = (props) => {
  return (
    <div className={styles.SideBarContainer}>
      <Card style={{marginBottom: '15px'}}>
        <div className={styles.SideCardHeader}>
          <span>About Us</span>
        </div>
        <div>
          <img src='https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/64704173_2410996865785956_3204191885107134464_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=wuJeD48-CzIAX8PAgd0&_nc_ht=scontent-nrt1-1.xx&oh=6501630124022f30fbe035bf82798eb3&oe=5E967983'
            alt='my image' />
        </div>
        <div className={styles.SideCardBody}>
          <p>I am Jonibek Norboev and I am a Software Engineer at Keiyo-Bend Co. Ltd., Graduated at INHA University!</p>
        </div>
      </Card>
      <Card style={{marginBottom: '15px'}}>
        <div className={styles.SideCardHeader}>
          <span>Social Network</span>
        </div>
        <div>
          <img src='https://pbs.twimg.com/profile_images/1183053530409488384/Tcj3z2Hw_400x400.jpg'
            alt='my image' />
        </div>
        <div className={styles.SideCardBody}>
          <p>I am Sayuri Hayashi and I am a Track & Field Athlete in Tripple Jump Major!</p>
        </div>
      </Card>
      <Card style={{marginBottom: '15px'}}>
        <div className={styles.SideCardHeader}>
          <span>Recent Posts</span>
        </div>
        <div className={styles.RecentPosts}>
          <div className={styles.RecentPost}>
            <h3>Post Title</h3>
            <span>March 3, 2020</span>
          </div>

          <div className={styles.RecentPost}>
            <h3>Post Title</h3>
            <span>March 3, 2020</span>
          </div>

          <div className={styles.RecentPost}>
            <h3>Post Title</h3>
            <span>March 3, 2020</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SideBar;
