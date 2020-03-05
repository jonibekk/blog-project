import React from 'react'


import styles from './style.css'


const ImageGallery = (props) => {
  return (
    <div style={props.style} className={styles.ImageGallery}>
      <div className={styles.Layer}></div>
      <img src={props.src} alt='something!'/>
      <div className={styles.OverImage} style={{top: props.top}}>
        <span>Fashion</span>
        <h4>This is Text</h4>
      </div>
    </div>
  )
}

export default ImageGallery;
