export default function Intro(props) {
    return (
        <main className="intro">
            <h1>Quizzical</h1>
            <h3>The musical trivia game</h3>
            <button onClick={props.startGame} className="intro--btn">
                Start quiz
            </button>
        </main>
    )
}