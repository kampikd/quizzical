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

  function decodeHtmlEntity(str) {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return doc.documentElement.textContent;
  }

  function pickAnswer(questionId, answerId) {
    setQuestions((oldQuestions) => (
      oldQuestions.map((oldQuestion) => (
        oldQuestion.id === questionId ? (
          { ...oldQuestion, pickedAnswerId: answerId }
        ) : (
          oldQuestion
        )
      ))
    ));
  }

  function buildAnswers(question, questionId) {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers];
    const answers = allAnswers.map((answer, index) => ({
      id: index + 1,
      answer: decodeHtmlEntity(answer),
      correct: index === 0,
      pickAnswer: () => pickAnswer(questionId, index + 1),
    }));
    return shuffle(answers);
  }

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=12&type=multiple')
      .then((res) => res.json())
      .then((data) => {
        const questionObjects = data.results.map((result, index) => ({
          id: index,
          question: decodeHtmlEntity(result.question),
          answers: buildAnswers(result, index),
          pickedAnswerId: null,
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
