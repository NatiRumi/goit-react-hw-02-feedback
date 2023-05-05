import React from 'react';
import Section from './Section';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = ({ target }) => {
    // console.log(target);
    this.setState(prev => ({
      [target.name]: prev[target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good + this.state.neutral + this.state.bad !== 0) {
      return Math.round(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      );
    } else {
      return 0;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Section
          state={this.state}
          onClick={this.handleClickBtn}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedback={this.countPositiveFeedbackPercentage}
        />
      </React.Fragment>
    );
  }
}

export default App;
