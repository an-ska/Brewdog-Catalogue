import React from 'react';
import styles from './Beer.scss';

const Beer = ({id, image, name, abv, ibu, ebc}) => (
  <li id={id}>
    <img alt='Beer image' src={image} />
    <p>{name}</p>
    <p>{abv}</p>
    <p>{ibu}</p>
    <p>{ebc}</p>
  </li>
)

export default Beer;
