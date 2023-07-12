import React,{useEffect}  from 'react'
import '../styles/box.css'
import WinnerBoard from './WinnerBoard';
const Box = (props) => {
  // const { board, box,n } = UseMyContext();
  const {XorO,player1,player2,board,box,boardSize,winnerGame,setWinnerGame}=props;
  useEffect(() => {
    if(+boardSize>6)
    {
        document.getElementById('centerBox').classList.add('largeBox')
    }
    if(+boardSize>18)
    {
        document.getElementById('centerBox').classList.add('extraLargeBox')
    }

    
  }, [boardSize]);
  return (
    <div className='box'>
      <div className='centerBox' id='centerBox' style={{gridTemplateColumns:`repeat(${boardSize}, 1fr)`,gridTemplateRows:`repeat(${boardSize}, 1fr)`}}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className='cells'
              onClick={() => box(rowIndex, colIndex)}
            >
              {cell}
              
            </div>
            
          ))
        )}
      </div>
      <span>
        {winnerGame &&  <WinnerBoard XorO={XorO} player1={player1} player2={player2} setWinnerGame={setWinnerGame} boardSize={boardSize}/> }
      </span>
    </div>
  );
};

export default Box;
