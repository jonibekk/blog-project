import React from 'react'
import cx from 'classnames'

import SideBar from '../../components/SideBar'
import RecentPosts from './RecentPosts'
import ImageGallery from './ImageGallery'
import Card from '../../components/UI/Card'
import styles from './style.css'


const m_image = 'https://1.bp.blogspot.com/-q2G-P44QbXs/V9_PE1fnC-I/AAAAAAAAD5A/5zt-KGj_SpUZSQwI6DA5ldLYQfC3LvG8wCLcB/s1600/5.jpg';
const Images = [
  'https://1.bp.blogspot.com/-q2G-P44QbXs/V9_PE1fnC-I/AAAAAAAAD5A/5zt-KGj_SpUZSQwI6DA5ldLYQfC3LvG8wCLcB/s1600/5.jpg',
  'https://4.bp.blogspot.com/-VPwhgryhHNI/V7dE6uYuECI/AAAAAAAAD1E/_vcLc2Q5NBcLAxNuTNAI52icq6Dsuj9LACLcB/s1600/Corset-3-472x708.jpg',
  'https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg'
];


const Home = (props) => {

  const galleryHeight = 450;
  const sideGalleryStyle = {
    height: galleryHeight / 3 + 'px',
  }

  return (
    <div>
      <section className={styles.Hero}>
        <div className={cx(styles.PostGallery, styles.Row)} >
          <section className={cx(styles['BigGallery'], )}>
            {<ImageGallery key='1' src={m_image} top='50%' />}
          </section>
          <section className={cx(styles['SmallGallery'], )}>
            {Images.map((link, index) => <ImageGallery key={index} style={sideGalleryStyle} src={link} top='50%'/>)}
          </section>
        </div>
      </section>
      <section className={styles['MainHomeContainer']}>
        <div className={styles['PostContainer']} >
          <RecentPosts />
        </div>
        <div className={styles['AboutUsContainer']} >
          <SideBar />
        </div>
      </section>

    </div>
  )
}

export default Home;
