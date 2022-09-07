import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

export default function Question(props) {
  const { question } = props;

  const answerElements = question.answers.map((answer) => <Answer answer={answer} />);

  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="answers">
        {answerElements}
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({ question: {}, answers: [] }).isRequired,
};
