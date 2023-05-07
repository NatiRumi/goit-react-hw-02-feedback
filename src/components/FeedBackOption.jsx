import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const FeedBackOption = ({ onClick }) => {
  return (
    <div className={css.counterBtn}>
      <button name="good" onClick={onClick} className={css.counterBtnStyle}>
        Good
      </button>
      <button name="neutral" onClick={onClick} className={css.counterBtnStyle}>
        Neutral
      </button>
      <button name="bad" onClick={onClick} className={css.counterBtnStyle}>
        Bad
      </button>
    </div>
  );
};

export default FeedBackOption;

FeedBackOption.propTypes = {
  onClick: PropTypes.func
}