import Intro from "./components/Intro"
import './App.css'
import { useState } from "react"
import Game from "./components/Game"

function App() {
  const [started, setStarted] = useState(false)

  function startGame() {
    setStarted(true)
  }

  return (
    <div className="App">
      {started ? <Game /> : <Intro startGame={startGame}/>}
    </div>
  )
}

export default App
