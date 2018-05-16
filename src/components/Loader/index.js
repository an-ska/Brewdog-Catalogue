import React from 'react';
import styles from './Loader.scss';

const Loader = () => (
  <div className={styles.loader}>
    <div className={`${styles.fountainText} ${styles.fountainText1}`}>L</div>
    <div className={`${styles.fountainText} ${styles.fountainText2}`}>o</div>
    <div className={`${styles.fountainText} ${styles.fountainText3}`}>a</div>
    <div className={`${styles.fountainText} ${styles.fountainText4}`}>d</div>
    <div className={`${styles.fountainText} ${styles.fountainText4}`}>i</div>
    <div className={`${styles.fountainText} ${styles.fountainText6}`}>n</div>
    <div className={`${styles.fountainText} ${styles.fountainText7}`}>g</div>
  </div>
)

export default Loader;
