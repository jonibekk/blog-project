import React from 'react'

import Card from '../UI/Card'
import styles from './style.css'

const BlogPost = (props) => {
  return (
    <div className={styles.BlogPostContainer}>
      <Card>
        <div className={styles.BlogHeader}>
          <span className={styles.BlogPostCategory}>Featured</span>
          <h1 className={styles.BlogPostTitle}>This is a Title!</h1>
          <span className={styles.BlogPostedBy}>posted by:</span>
        </div>
        <div className={styles.BlogPostImageContainer}>
          <img src={require('../../assets/images/memories.jpg')} alt='Post Image' />
        </div>
      </Card>
    </div>

  )
}

export default BlogPost;
