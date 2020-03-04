import React from 'react'

import Card from '../../../components/UI/Card'
import styles from './style.css'

const RecentPosts = (props) => {
  return (
    <div className={styles['HomeContainer']}>
      <Card style={{marginBottom: '20px'}}>
        <div className={styles['PostImageWrapper']}>
          <img src='https://1.bp.blogspot.com/-q2G-P44QbXs/V9_PE1fnC-I/AAAAAAAAD5A/5zt-KGj_SpUZSQwI6DA5ldLYQfC3LvG8wCLcB/s1600/5.jpg'
            alt='something!'/>
        </div>
        <div className={styles['PostContent']}>
          <span>FEATURED</span>
          <h2>Fitness Mantra To Live Fit Life</h2>
          <span>posted onJuly 21, 2016 bySora Blogging Tips</span>
          <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>
          <button>Read More</button>
        </div>


      </Card>
      <Card style={{marginBottom: '20px'}}>
        Post 2
      </Card>
    </div>
  )
}

export default RecentPosts;
