import React from 'react'

import BlogPost from '../../components/BlogPost'
import SideBar from '../../components/SideBar'
import styles from './style.css'

const Post = (props) => {

  return (
    <section className={styles.container}>
      <div className={styles.BlogPost}>
        <BlogPost {...props} />
      </div>
      <div className={styles.SideBar}>
        <SideBar {...props} />
      </div>
    </section>
  )
}

export default Post;
