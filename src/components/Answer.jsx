import React from 'react';
import PropTypes from 'prop-types';

export default function Answer(props) {
  const { answer, picked } = props;

  return (
    <button type="button" className={picked && 'picked'} onClick={answer.pickAnswer}>{answer.answer}</button>
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  picked: PropTypes.bool.isRequired,
};
