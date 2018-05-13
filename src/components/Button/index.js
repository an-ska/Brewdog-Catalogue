import React from 'react';
import styles from './Button.scss';

const Button = ({handleClick, text}) => (
  <button
    onClick={handleClick}>
    {text}
  </button>
)

export default Button;
