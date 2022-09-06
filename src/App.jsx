import React, { useCallback, useState } from 'react';
import Intro from './components/Intro';
import Game from './components/Game';
import './App.css';

export default function App() {
  const [started, setStarted] = useState(false);
  const startGame = useCallback(() => setStarted(true), []);

  return (
    <div className="App">
      {started ? <Game /> : <Intro startGame={startGame} />}
    </div>
  );
}
