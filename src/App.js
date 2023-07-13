/* eslint-disable no-restricted-globals */
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
  const [color,setColor]=useState('white');
  const [XorO, setXorO] = useState(0);
  const [boardSize, setBoardSize] = useState(3);
  const [initialCellValue,setInitialCellValue] = useState(null);
  const [board, setBoard] = useState([]);
  const [kawin, setkawin] = useState([]);
  const [winnerGame, setWinnerGame] = useState(false);

  useEffect(() => {
    setInitialCellValue(null);
    
    if (+boardSize >  2 && +boardSize <21) {
      const initialBoard = Array(+boardSize).fill(initialCellValue).map(() => Array(+boardSize).fill(initialCellValue));
      setBoard(initialBoard);
    }
    else{
      setBoardSize(3);
      const initialBoard = Array(3).fill(initialCellValue).map(() => Array(3).fill(initialCellValue));
      setBoard(initialBoard);
    }
    if(+boardSize>6)
    {
      document.getElementById('centerBox').classList.add('largeBox')
    }
  }, [boardSize]);

  useEffect(() => {
    if (XorO >= (boardSize * 2) - 1) {
      check();
    }
 
  }, [board]);

  useEffect(() => {
    console.log(kawin);
    console.log(kawin.length);
  }, [kawin]);

  useEffect(()=>{
  // eslint-disable-next-line array-callback-return
  kawin.map((val)=>{
    console.log(val);
    let element=document.getElementById(`${val}`).classList.add('winnercolor');
  })

  },[winnerGame])
  
  function box(rowIndex, colIndex) {
    const newBoard = [...board];
    if (newBoard[rowIndex][colIndex] === initialCellValue ) {
      setXorO(XorO + 1);
      if(XorO%2===0){
        newBoard[rowIndex][colIndex] = 'X';
        event.stopPropagation()
        event.target.className='xbox';
      }
      else{
        newBoard[rowIndex][colIndex] = 'O';
        event.target.className='ybox';
      }
      setBoard(newBoard);
    }
    
  }

  function winner() {
    setWinnerGame(true);

    setInitialCellValue("notNull");
    setXorO(XorO-1);
    if (XorO % 2 !== 0) {
      console.log("player 1 win", XorO);
    }
    else {
      console.log("player 2 win", XorO);
    }
  }
  let flag=0;

  function rightCheak() {
    let right = 1;
    setkawin([...kawin,`0-0`]);
    // console.log(kawin);
    for (let rowCol = 1; rowCol < boardSize; rowCol++) {

      if (board[0][0] === board[rowCol][rowCol] && board[rowCol][rowCol] != null) {
        setkawin((prev)=>[...prev,`${rowCol}-${rowCol}`]) 

        right = right + 1;
      }
      if (right === +boardSize) {
        winner();
        flag=1;
        break;
      }
      if(rowCol===boardSize-1)
      {
        console.log('summa 1');
        setkawin([]);
      }
      
    }
    console.log('running 1');




  }
  function leftCheak() {
    let left = 1;
    setkawin([...kawin,`0-${boardSize - 1}`]);
    
    for (let column = 1; column < boardSize; column++) {

      if (board[0][boardSize - 1] === board[column][boardSize - column - 1] && board[0][boardSize - 1] != null) {
        setkawin((prev)=>[...prev,`${column}-${boardSize-column-1}`])  
        left = left + 1;
      }
      if (left === +boardSize) {
        winner();
        flag=1;
        break;
      }

      if(column===boardSize-1){
        console.log('summa 2');
        setkawin([]);
      }
    
  }
  console.log('---->running 2');

  }

  function rowCheak() {
    let columnFixed = 0;
    let rowValid;
    for (let row = 0; row < boardSize; row++) {

      setkawin([...kawin,`${row}-${columnFixed}`]);
      rowValid = 1;
      for (let col = 1; col < boardSize; col++) {

        if (board[row][columnFixed] === board[row][col] && board[row][columnFixed] != null) {
          setkawin((prev)=>[...prev,`${row}-${col}`]);

          rowValid = rowValid + 1;
        }
      }
      if (rowValid === +boardSize) {
        winner();
        flag=1;
        break;
      }
      if(row===boardSize-1)
      {
        console.log('summ 3');
        setkawin([]);
      }
      console.log('running ----3');
    }
  }
  function columnCheck() {
    let rowFixed = 0;
    let columnValid;
    for (let i = 0; i < boardSize; i++) {
      columnValid = 1;
      setkawin([...kawin,`${rowFixed}-${i}`]);
      for (let j = 1; j < boardSize; j++) {

        if (board[rowFixed][i] === board[j][i] && board[rowFixed][i] != null) {
        setkawin((prev)=>[...prev,`${j}-${i}`]);

          columnValid = columnValid + 1;
        }
      }
      if (columnValid === +boardSize) {
        winner();
        flag=1;
        break;
      }
      if(i===boardSize-1)
      {
        console.log('summa 4');
        setkawin([]);
      }
      console.log('running 4');
    }
  }
  function check() {
    if(XorO===boardSize*boardSize)
    {
      setWinnerGame(true);
      setInitialCellValue("notNull");
    }
    if(flag===0){
      rightCheak();
    }
    if(flag===0){
      leftCheak();

    }
    if(flag===0){
      rowCheak();

    }
    if(flag===0){
      columnCheck();
    }

  }


  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Head />

          <Routes>
            <Route exact path="/" element={<StartingGame setBoardSize={setBoardSize} setPlayer1={setPlayer1} setPlayer2={setPlayer2} player1={player1} player2={player2} />} />
            <Route path="/Player" element={<Player color={color} XorO={XorO} board={board} box={box} boardSize={boardSize} player1={player1} player2={player2} winnerGame={winnerGame} setWinnerGame={setWinnerGame}/>} />

          </Routes>


          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </>

  );
}
export function UseMyContext() {
  return useContext(mycontext);
}

export default App;
