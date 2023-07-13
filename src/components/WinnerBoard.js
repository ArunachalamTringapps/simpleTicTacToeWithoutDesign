import React from 'react'
import '../styles/winnerBoard.css'
import popper from '../assets/popper.gif';
import popper_left_side from '../assets/popper_left_side.gif'
const WinnerBoard = (props) => {
    const { player1, player2, XorO, setWinnerGame, boardSize } = props;
    const closeButton = () => {
        setWinnerGame(false);
    }
    return (
        <div className='winnerBox'>
            <span className='closeButton' onClick={closeButton}>X</span>
            <div className='detailsContent'>
                <div className='gameover'>
                    <h1 >GAME OVER!! </h1>
                </div>
                <div className='popperBox'>
                    <img className='popper' src={popper} alt="popper_loading" />
                    <img className='popper' src={popper_left_side} alt="popper_loading" />
                </div>

        

                <div className='visible'>
                    {
                    XorO === boardSize * boardSize ? (<h3>Match Draw!!!</h3>) : <><h3>Congratulations!</h3><p>{`${XorO % 2 === 0 ? player1  : player2}`} won the game!</p></>
                    }
                </div>
            </div>
        </div>


    )
}

export default WinnerBoard
