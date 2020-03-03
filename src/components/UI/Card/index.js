import React from 'react'

import styles from './style.css'

const Card = (props) => {
  return (
    <div className={styles.Card} style={{width: props.width ? props.width : '100%'}} {...props}>
      {props.children}
    </div>
  )
}

export default Card;
