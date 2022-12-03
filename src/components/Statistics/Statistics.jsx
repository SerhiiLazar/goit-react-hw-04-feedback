import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, totalFeedback, positivePersent }) => {
  return (
    <ul className={css.statistic__module}>
      <li className={css.statistic__listGood}>
        <span className={css.statistic__name}>Good:</span>
        <span className={css.statistic__number}>{good}</span>
      </li>
      <li className={css.statistic__listNeutral}>
        <span className={css.statistic__name}>Neutral:</span>
        <span className={css.statistic__number}>{neutral}</span>
      </li>
      <li className={css.statistic__listBad}>
        <span className={css.statistic__name}>Bad:</span>
        <span className={css.statistic__number}>{bad}</span>
      </li>
      <li className={css.statistic__list}>
        <span className={css.statistic__name}>Total:</span>
        <span className={css.statistic__number}>{totalFeedback}</span>
      </li>
      <li className={css.statistic__list}>
        <span className={css.statistic__name}>Positive feedback:</span>
        <span className={css.statistic__number}>{positivePersent}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePersent: PropTypes.number.isRequired,
};

export default Statistics;
