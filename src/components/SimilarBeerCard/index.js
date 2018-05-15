import React from 'react';
import styles from './SimilarBeerCard.scss';

const SimilarBeerCard = ({id, image, name}) => (
  <div id={id}>
    <img src={image} alt='' />
    <p>{name}</p>
  </div>
)

export default SimilarBeerCard;
