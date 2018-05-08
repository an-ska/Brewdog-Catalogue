import React from 'react';
import styles from './Alert.scss';

const Alert = ({icon, text}) => (
  <div>
    <i className={`fas ${icon}`} />
    {text}
  </div>
)

export default Alert;
