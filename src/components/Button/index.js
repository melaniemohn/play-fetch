import React from 'react';
import styles from './styles.module.scss';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      <p>{children}</p>
    </button>
  );
}
