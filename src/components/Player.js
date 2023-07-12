import React, { useState } from 'react'
import '../styles/player.css'
import Box from './Box'
import PlayerOne from './PlayerOne'
import PlayerTwo from './PlayerTwo'
import WinnerBoard from './WinnerBoard'
import { Link } from 'react-router-dom'
const Player = (props) => {
  const { XorO, board, box, boardSize, player1, player2, winnerGame, setWinnerGame } = props;
  return (
    <>

      <div className='split'>
        <div className='border'><PlayerOne XorO={XorO} player1={player1} />  </div>
        <div className='border'><Box XorO={XorO} player1={player1} player2={player2} board={board} box={box} boardSize={boardSize} winnerGame={winnerGame} setWinnerGame={setWinnerGame} /></div>
        <div className='border'><PlayerTwo XorO={XorO} player2={player2} /></div>

      </div>
      <Link to="/"><div className='backButton' ><button >{"BACK"}</button></div></Link>
    </>
  )
}

export default Player
