import React from 'react';
import styles from './Button.scss';

const Button = ({loadMoreResults}) => (
  <button onClick={() => loadMoreResults()}>LOAD MORE</button>
)

export default Button;
