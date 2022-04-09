import React from 'react';
import styles from './Person.module.css';

const Person = (props) => {
  return (
      <figure className={styles.person}>
          <img src={props.imageUrl} alt={props.username} />
          <figcaption>
              <p>Username : { props.username}</p>
              <p>Followers : {props.followers}</p>
              <p>Following : { props.following}</p>
          </figcaption>
    </figure>
  )
}

export default Person