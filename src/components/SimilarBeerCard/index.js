import React from 'react';
import styles from './SimilarBeerCard.scss';

const SimilarBeerCard = ({id, image, name}) => (
  <div>{id}{image}{name}</div>
)

export default SimilarBeerCard;
