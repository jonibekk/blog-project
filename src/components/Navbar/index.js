import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './style.css'

const Navbar = (props) => {

  const [search, setSearch] = useState(false);

  const submitSearchHandler = (ev) => {
    ev.preventDefault();
    alert('Search');
  }

  const searchClicked = () => {
    setSearch(!search);
  }

  return (
    <div className={styles.Navbar}>
      <ul className={styles.NavbarMenu}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </ul>
      <div className={styles.Search}>
        <form onSubmit={submitSearchHandler}>
          <input className={styles.SearchInput} type='text' placeholder='Search'/>
          <img className={styles.SearchIcon} onClick={searchClicked} src={require('../../assets/icons/search.png')} alt='Search' />
        </form>
      </div>
    </div>
  )
}

export default Navbar;
