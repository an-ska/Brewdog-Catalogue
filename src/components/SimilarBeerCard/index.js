import React from 'react';
import styles from './SimilarBeerCard.scss';

const SimilarBeerCard = ({id, image, name, abv, ibu, ebc }) => (
  <div id={id} className={styles.box}>
    <div>
      <p className={styles.title}>{name}</p>
      <ul className={styles.list}>
        <li><span className={styles.subtitle}>ABV: </span>{abv}</li>
        <li><span className={styles.subtitle}>IBU:</span> {ibu}</li>
        <li><span className={styles.subtitle}>EBC:</span> {ebc}</li>
      </ul>
    </div>
    <img
      src={image}
      alt='Beer image'
      className={styles.image} />
  </div>
)

export default SimilarBeerCard;
