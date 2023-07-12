import './App.css';
import Player from './components/Player';
import Head from './components/Head';
import Footer from './components/Footer';
import { createContext, useContext, useRef, useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StartingGame from './components/StartingGame';
const mycontext = createContext();


function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  // const playerName1=player1.current.value;
  // const playerName2=player2.current.value;

  const [XorO, setXorO] = useState(0);
  const [boardSize, setBoardSize] = useState(3);
  const [initialCellValue,setInitialCellValue] = useState(null);
  const [board, setBoard] = useState([]);
  const [winnerGame, setWinnerGame] = useState(false);

  useEffect(() => {
    setInitialCellValue(null);
    
    if (+boardSize >  2 && +boardSize <21) {
      console.log("haii",boardSize);
      const initialBoard = Array(+boardSize).fill(initialCellValue).map(() => Array(+boardSize).fill(initialCellValue));
      setBoard(initialBoard);
    }
    else{
      console.log("hello",boardSize);
      setBoardSize(3);
      const initialBoard = Array(3).fill(initialCellValue).map(() => Array(3).fill(initialCellValue));
      setBoard(initialBoard);
    }
    // if(+boardSize>6)
    // {
    //   document.getElementById('centerBox').classList.add('largeBox')
    // }
  }, [boardSize]);

  useEffect(() => {
    if (XorO >= (boardSize * 2) - 1) {
      check();
    }
  }, [board]);


  function box(rowIndex, colIndex) {
    const newBoard = [...board];
    if (newBoard[rowIndex][colIndex] === initialCellValue ) {
      setXorO(XorO + 1);
      XorO % 2 === 0 ? newBoard[rowIndex][colIndex] = 'X' : newBoard[rowIndex][colIndex] = 'O';
      setBoard(newBoard);

    }
    
  }

  function winner() {
    console.log("Come on");
    setWinnerGame(true);
    
    setInitialCellValue("notNull");
    setXorO(XorO-1);
    console.log(winnerGame);
    if (XorO % 2 !== 0) {
      console.log("player 1 win", XorO);
    }
    else {
      console.log("player 2 win", XorO);
    }
  }

  function rightCheak() {
    let right = 1;
    for (let rowCol = 1; rowCol < boardSize; rowCol++) {
      if (board[0][0] === board[rowCol][rowCol] && board[rowCol][rowCol] != null) {
        right = right + 1;
      }
      if (right === +boardSize) {
        console.log("rightCheak");
        winner();
        break;
      }
    }



  }
  function leftCheak() {
    let left = 1;
    for (let column = 1; column < boardSize; column++) {
      if (board[0][boardSize - 1] === board[column][boardSize - column - 1] && board[0][boardSize - 1] != null) {
        left = left + 1;
      }
      if (left === +boardSize) {
        console.log("leftCheak");
        winner();
        break;
      }
    }


  }

  function rowCheak() {
    let columnFixed = 0;
    let rowValid;
    for (let row = 0; row < boardSize; row++) {
      rowValid = 1;
      for (let col = 1; col < boardSize; col++) {
        if (board[row][columnFixed] === board[row][col] && board[row][columnFixed] != null) {
          rowValid = rowValid + 1;
        }
      }
      if (rowValid === +boardSize) {
        console.log("rovaild check");
        winner();
        break;
      }
    }
  }
  function columnCheck() {
    let rowFixed = 0;
    let columnValid;
    for (let i = 0; i < boardSize; i++) {
      columnValid = 1;
      for (let j = 1; j < boardSize; j++) {
        if (board[rowFixed][i] === board[j][i] && board[rowFixed][i] != null) {
          columnValid = columnValid + 1;
        }
      }
      if (columnValid === +boardSize) {
        console.log("colunaild check");
        winner();
        break;
      }
    }
  }
  function check() {
    console.log("yes");
    if(XorO===boardSize*boardSize)
    {
      console.log("draw")
      setWinnerGame(true);
      setInitialCellValue("notNull");
    }
    
    rightCheak();
    leftCheak();
    rowCheak();
    columnCheck();

  }

  //  const contextValue = useMemo(()=>({XorO,setXorO,board,setBoard,Box}),[board,XorO,Box])
  // const contextValue ={XorO,setXorO,board,setBoard,box,boardSize};
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Head />
          {/* <mycontext.Provider value={contextValue}> */}

          <Routes>
            <Route exact path="/" element={<StartingGame setBoardSize={setBoardSize} setPlayer1={setPlayer1} setPlayer2={setPlayer2} player1={player1} player2={player2} />} />
            <Route path="/Player" element={<Player XorO={XorO} board={board} box={box} boardSize={boardSize} player1={player1} player2={player2} winnerGame={winnerGame} setWinnerGame={setWinnerGame}/>} />

          </Routes>


          {/* </mycontext.Provider> */}
          <Footer />
        </div>
      </BrowserRouter>
    </>

  );
}
export function UseMyContext() {
  return useContext(mycontext);
}

export default App;
