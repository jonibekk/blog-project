import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Card from '../UI/Card'
import PostData from '../../data/blog.json'
import styles from './style.css'

const SideBar = (props) => {

  const [posts, setPost] = useState([]);

  useEffect(() => {
    const currentPost = PostData.data;
    setPost(currentPost);
    console.log(currentPost);
  }, [posts])


  return (
    <div className={styles.SideBarContainer} style={{width: props.width}}>

      <Card style={{marginBottom: '15px'}}>
        <div className={styles.SideCardHeader}>
          <span>About Us</span>
        </div>
        <div>
          <img src='https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/64704173_2410996865785956_3204191885107134464_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=wuJeD48-CzIAX8PAgd0&_nc_ht=scontent-nrt1-1.xx&oh=6501630124022f30fbe035bf82798eb3&oe=5E967983'
            alt='my personal picture' />
        </div>
        <div className={styles.SideCardBody}>
          <p>I am Jonibek Norboev and I am a Software Engineer at Keiyo-Bend Co. Ltd., Graduated at INHA University!</p>
        </div>
      </Card>

      <Card style={{marginBottom: '15px'}}>
        <div className={styles.SideCardHeader}>
          <span>Social Network</span>
        </div>
      </Card>

      <Card style={{marginBottom: '15px'}}>
        <div className={styles.SideCardHeader}>
          <span>Recent Posts</span>
        </div>

        <div className={styles.RecentPosts}>
          {
            posts.map((post) => (
              <div className={styles.RecentPost}>
                <NavLink key={post.id} to={'/post/' + post.id}>
                  <h3>{post.blogTitle}</h3>
                </NavLink>
                <span>{post.postedOn}</span>
              </div>
            ))
          }
        </div>
      </Card>

    </div>
  )
}

export default SideBar;
