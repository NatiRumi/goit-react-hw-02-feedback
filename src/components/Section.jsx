import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import FeedBackOption from './FeedBackOption';
import css from './Section.module.css';

const Section = ({
  state,
  onClick,
  countTotalFeedback,
  countPositiveFeedback,
}) => {
  return (
    <div className={css.container}>
      <div className="counterContainer">
        <h1>Please leave feedback</h1>
      </div>
      <FeedBackOption onClick={onClick} />
      <Statistics
        state={state}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedback={countPositiveFeedback}
      />
    </div>
  );
};

export default Section;

Section.propTypes = {
  state: PropTypes.object,
  onClick: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedback: PropTypes.func
}
