import React from 'react';
import styles from './Person.module.css';

const Person = ({name,age}) => {
  return (
      <article className={styles.persons}>
          <h2>Name : {name}</h2>
          <h3>Age : { age }</h3>
    </article>
  )
}

export default Person;