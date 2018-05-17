import React from 'react';
import styles from './RandomBeer.scss';

const RandomBeer = ({ id, image, name, abv, ibu, ebc }) => (
  <div id={id} className={styles.box}>
    <div>
      <h3 className={styles.title}>{name}</h3>
      <ul className={styles.list}>
        <li><span className={styles.subtitle}>Alcohol By Volume: </span>{abv}</li>
        <li><span className={styles.subtitle}>International Bitterness Unit: </span>{ibu}</li>
        <li><span className={styles.subtitle}>European Brewery Convention: </span>{ebc}</li>
      </ul>
    </div>
    <img
      src={image}
      alt='Beer image'
      className={styles.image} />
  </div>
)

export default RandomBeer;
