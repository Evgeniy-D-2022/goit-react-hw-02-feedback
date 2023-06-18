import React, { Component } from 'react';
import './app.css';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleLeaveFeedback = (e) => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  

  render() {
    // const { good, neutral, bad } = this.state;
    // const options = ['good', 'neutral', 'bad'];
    // options.map(option)

    // const total = this.totalFeedbackCount();


   const buttonName = this.state.name;

    return (
      <>
       <section className='Feedback'>
        <h1 className='Feedback__title'>Please leave feedback</h1>
      
      <ul className='Feedback__list'>
        <li className='Feedback__item' key={buttonName}>
          <button 
          name={this.state.good}
          className='Feedback__btn'
          onClick={this.handleLeaveFeedback}
          >Good</button></li>
        <li className='Feedback__item'>

          <button
           className='Feedback__btn'
           id='neutral'
           onClick={()=> this.handleLeaveFeedback}
           >Neutral</button>
           
           </li>
        <li className='Feedback__item'>
          <button 
          className='Feedback__btn'
          id='bad'
          onClick={()=> this.handleLeaveFeedback}
          >Bad</button></li>
      </ul>
    </section>
    <section className='Statistics'>
      <h1 className='Statistics__title'>Statistics</h1>
      <ul className='Statistics__list'>
        <li className='Statistics__item'><p className='Statistics__text'>Good: {this.state.good}</p></li>
        <li className='Statistics__item'><p className='Statistics__text'>Neutral: {this.state.neutral}</p></li>
        <li className='Statistics__item'><p className='Statistics__text'>Bad: {this.state.bad}</p></li>
      </ul>
    </section>
      </>
   
    )
  }
}

export default App;

// App.propTypes = {
//   options: PropTypes.object.isRequired,
//   // onLeaveFeedback: PropTypes.func.isRequired,
// };