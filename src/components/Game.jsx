import React, { useEffect, useState } from 'react';
import Question from './Question';

export default function Game() {
  const [questions, setQuestions] = useState([]);

  function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  }

  function buildAnswers(question) {
    const correctAnswer = {
      answer: decodeHtmlEntity(question.correct_answer),
      correct: true,
    };
    const answers = question.incorrect_answers.map((answer) => ({
      answer: decodeHtmlEntity(answer), correct: false,
    }));
    answers.push(correctAnswer);
    return shuffle(answers);
  }

  function decodeHtmlEntity(str) {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return doc.documentElement.textContent;
  }

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=12&type=multiple')
      .then((res) => res.json())
      .then((data) => {
        const questionObjects = data.results.map((result) => ({
          question: decodeHtmlEntity(result.question),
          answers: buildAnswers(result),
        }));
        setQuestions(questionObjects);
      });
  }, []);

  const questionElements = questions.map((question) => <Question question={question} />);

  return (
    <main className="game">
      {questionElements}
    </main>
  );
}
