import React from 'react';
import PropTypes from 'prop-types';

export default function Intro(props) {
  const { startGame } = props;

  return (
    <main className="intro">
      <h1>Quizzical</h1>
      <h3>The musical trivia game</h3>
      <button type="button" onClick={startGame} className="intro--btn">
        Start quiz
      </button>
    </main>
  );
}

Intro.propTypes = {
  startGame: PropTypes.func.isRequired,
};
