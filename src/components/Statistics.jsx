import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ state, countTotalFeedback, countPositiveFeedback }) => {
  return (
    <div className="statisticsContainer">
      <h2>Statistics</h2>
      {countTotalFeedback() === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <div>
          <p>Good {state.good}</p>
          <p>Neutral {state.neutral}</p>
          <p>Bad {state.bad}</p>
          <p>Total {countTotalFeedback()}</p>
          <p>Positive feedback {countPositiveFeedback()} %</p>
        </div>
      )}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  state: PropTypes.object,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedback: PropTypes.func
}