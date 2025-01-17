import React from 'react';
import styles from './Options.module.css';

export const Options = ({ onLeaveFeedback, onReset }) => {
  return (
    <div className={styles.options}>
      <button
        type="button"
        onClick={() => onLeaveFeedback('good')}
        className={styles.button}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => onLeaveFeedback('neutral')}
        className={styles.button}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => onLeaveFeedback('bad')}
        className={styles.button}
      >
        Bad
      </button>
      <button
        type="button"
        onClick={onReset}
        className={`${styles.button} ${styles.reset}`}
      >
        Reset
      </button>
    </div>
  );
};