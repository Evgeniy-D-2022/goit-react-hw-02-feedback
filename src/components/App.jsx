import React, { Component } from 'react';
import './app.css';
import Statistics from './Statistics/Statistics';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  

  handleLeaveFeedback = e => {
    const {name} = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positive = Math.round((this.state.good * 100) / this.countTotalFeedback());
    return positive;
  }

  render() {
    
    const { good, neutral, bad } = this.state;
    const names = ['good', 'neutral', 'bad'];

    return (
      <>
       <section className='Feedback'>
        <h1 className='Feedback__title'>Please leave feedback</h1>
        <ul className='Feedback__list'>
      
      {names.map(name => (
      <li className='Feedback__item' key={name}>
    <button className='Feedback__btn' 
    name={name} type="button" 
    onClick={this.handleLeaveFeedback}>
      {name}
    </button>
  </li>
))}
    </ul>
      
    </section>
    <section className='Statistics'>
      <h1 className='Statistics__title'>Statistics</h1>

      < Statistics 
       good={good}
       neutral={neutral}
       bad={bad}
       total={this.countTotalFeedback()}
       positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}/>
      
    </section>
      </>
   
    )
  }
}

export default App;