import React, { useState } from 'react';
import css from './App.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const isOptions = { good: 0, bad: 0, neutral: 0 };

export default function App() {
  const [options, setOptions] = useState(isOptions);
  const { good, bad, neutral } = options;
  const countTotalFeedback = good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback) * 100);
  };

  const onFeadback = feedbackType => {
    setOptions(state => ({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    }));
  };

  return (
    <div className={css.wrapper}>
      <Section title="Please leave Feedback" className={css.section}>
        <FeedbackOptions options={options} onFeadback={onFeadback} />
      </Section>

      <Section title="Statistics">
        {!countTotalFeedback ? (
          <Notification messege="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback}
            positivePersent={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
