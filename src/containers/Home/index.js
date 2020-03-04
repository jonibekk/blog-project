import React from 'react'

import SideBar from '../../components/SideBar'
import RecentPosts from './RecentPosts'
import Card from '../../components/UI/Card'
import styles from './style.css'

const SideImage = (props) => {
  return (
    <div style={props.mstyle}>
      <img src={props.src} alt='something!'/>
    </div>
  )
}

const Home = (props) => {

  const galleryHeight = 450;

  const sideGalleryStyle = {
    height: galleryHeight / 3 + 'px',
    overflow: 'hidden',
  }

  const m_image = 'https://1.bp.blogspot.com/-uUyRrF_pZzI/V9_OnN0WMPI/AAAAAAAAD48/GDN9pK1mnuwJvYdO4SoCJ38adB0sMzmLQCLcB/s1600/Special-1.jpg';
  const Images = [
    'https://1.bp.blogspot.com/-q2G-P44QbXs/V9_PE1fnC-I/AAAAAAAAD5A/5zt-KGj_SpUZSQwI6DA5ldLYQfC3LvG8wCLcB/s1600/5.jpg',
    'https://4.bp.blogspot.com/-VPwhgryhHNI/V7dE6uYuECI/AAAAAAAAD1E/_vcLc2Q5NBcLAxNuTNAI52icq6Dsuj9LACLcB/s1600/Corset-3-472x708.jpg',
    'https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg'
  ];

  return (
    <div>
      <Card>
        <div className={styles['PostGallery']}>
          <section className={styles['BigGallery']}>
            <SideImage src={m_image}/>
          </section>
          <section className={styles['SmallGallery']}>
            {Images.map((link) => <SideImage mstyle={sideGalleryStyle} src={link}/>)}
          </section>
        </div>
      </Card>

      <section className={styles['MainHomeContainer']}>
        <RecentPosts />
        <SideBar />
      </section>

    </div>
  )
}

export default Home;
