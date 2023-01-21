import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section'
import Notification from './Notification/Notification';

export class App extends Component{
            state = {
        good: 0,
        neutral: 0,
        bad: 0,
            };
  
  leaveFeedback = (option) => {
     this.setState(prevState => {
            return {
                [option]: prevState[option] +=1
            }
        }
        )}
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };


  render() {
    const {good}= this.state
    const {neutral} = this.state
    const {bad} = this.state
    
    return (
      <div>
        {this.countTotalFeedback()
          ?
          (<Section title="Statistics">  
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage ={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        ) : (
          <Notification message="There is no feedback"/>
          )}
        <Section title="Please leave your Feedback">
   <Feedback
          options={['good', 'neutral', 'bad']}
          onleaveFeedback ={this.leaveFeedback}
        /> 
        </Section>
</div>
    )
  }
}