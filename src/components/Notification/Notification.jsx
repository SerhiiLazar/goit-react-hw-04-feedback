import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ messege }) => {
  return <p className={css.text}>{messege}</p>;
};

Notification.propTypes = {
  messege: PropTypes.string.isRequired,
};

export default Notification;
