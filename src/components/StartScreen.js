import React from 'react'
import './StartScreen.css'
import Logo from '../asset/Secret.png'

const StartScreen = ({startGame}) => {
  return (
    <div className='Start'>   
    <img src={Logo} alt="" />
    <div  className='button'>
    <button onClick={startGame}>Start Game</button>
    </div>
    
    </div>
  )
}

export default StartScreen