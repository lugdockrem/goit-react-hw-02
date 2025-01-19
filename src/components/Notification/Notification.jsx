import React from 'react';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div className={styles.notification}>
      {message}
    </div>
  );
};