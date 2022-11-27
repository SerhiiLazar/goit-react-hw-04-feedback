import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeadback }) => {
  const onClickButton = feedbackType => () => {
    onFeadback(feedbackType);
  };

  return (
    <ul className={css.feadbackItem}>
      {Object.keys(options).map(feedbackType => {
        return (
          <li className={css.feadbackList} key={feedbackType}>
            <button
              type="button"
              className={css.feadbackbtn}
              onClick={onClickButton(feedbackType)}
            >
              {feedbackType}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onFeadback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
