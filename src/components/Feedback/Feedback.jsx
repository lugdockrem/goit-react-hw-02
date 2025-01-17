import React from 'react';
import styles from './Feedback.module.css';

export const Feedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.feedback}>
      <h2>Statistics:</h2>
      <ul className={styles.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};