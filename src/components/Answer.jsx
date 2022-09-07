import React from 'react';
import PropTypes from 'prop-types';

export default function Answer(props) {
  const { answer } = props;
  return (
    <h4>{answer.answer}</h4>
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
};
