import React from 'react';
import styles from './ErrorMessage.scss';

const ErrorMessage = ({ icon, text }) => (
  <div className={styles.errorContainer}>
    <div className={styles.errorIcon}>
      <i className={`fas fa-lg ${icon}`} />
    </div>
    <div className={styles.errorText}>{text}</div>
  </div>
)

export default ErrorMessage;
