import React, { useState, useEffect } from 'react';
import { Options } from './components/Options'; 
import { Feedback } from './components/Feedback/Feedback';
import { Notification } from './components/Notification/Notification';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem('cafeFeedback');
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('cafeFeedback', JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className="app">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options onLeaveFeedback={handleFeedback} onReset={handleReset} />
      {total > 0 ? (
        <Feedback {...feedback} />
      ) : (
        <Notification message="There is no feedback yet" />
      )}
    </div>
  );
}

export default App;