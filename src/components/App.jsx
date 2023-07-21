import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import  { useState } from 'react';

export const App = () => {

   const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
   });
  const { good, neutral, bad } = feedback;
  
 const incrementCount = btnId => {
    setFeedback(prevfeedback =>( {...prevfeedback,
       [btnId]: prevfeedback[btnId] + 1 
    }));
  };
 const total = good + neutral + bad;
  

 const countPositiveFeedbackPercentage = () => {
   
    
    return Math.round((good / total) * 100);
  };
  
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedbackClick={incrementCount}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  
}
