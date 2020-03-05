import React, { useState, useEffect } from 'react'

import Card from '../UI/Card'
import PostData from '../../data/blog.json'
import styles from './style.css'

const BlogPost = (props) => {

  const [post, setPost] = useState({
    id : 0,
    blogCategory: '',
    blogTitle: '',
    slug: '',
    postedOn: '',
    author: '',
    blogImage: '',
    blogText: '',
  });
  const [postSlug, setPostSlug] = useState('');

  useEffect(() => {
    const slug = props.match.params.slug;
    const currentPost = PostData.data.find(post => post.slug === slug)
    setPost(currentPost);
    setPostSlug(slug);
  }, [post, props.match.params.slug]);

  if(post.blogImage === '') return null;

  return (
    <div className={styles.BlogPostContainer}>
      <Card>
        <div className={styles.BlogHeader}>
          <span className={styles.BlogPostCategory}>{post.blogCategory}</span>
          <h1 className={styles.BlogPostTitle}>{post.blogTitle}</h1>
          <span className={styles.BlogPostedBy}>posted on {post.postedOn} by {post.author}</span>
        </div>
        <div className={styles.BlogPostImageContainer}>
          <img src={require('../../assets/images/' + post.blogImage)} alt='Post Image' />
        </div>
        <div className={styles.BlogPostContent}>
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>

  )
}

export default BlogPost;
