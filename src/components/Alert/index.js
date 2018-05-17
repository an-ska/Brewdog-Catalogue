import React from 'react';
import styles from './Alert.scss';

const Alert = ({ icon, text }) => (
  <div className={styles.alert}>
    <div className={styles.alertIcon}>
      <i className={`fas fa-lg ${icon}`} />
    </div>
    <div className={styles.alertText}>{text}</div>
  </div>
)

export default Alert;
