import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
    <h1>Game over</h1>
    <h2>A sua pontuação foi: <span>{score}</span></h2>
    <button onClick={retry}>Recomeçar</button>
  </div>
  )
}

export default GameOver