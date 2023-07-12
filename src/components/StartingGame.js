import React from 'react'
import '../styles/startingGame.css'
import { Link } from 'react-router-dom'

export default function StartingGame(props) {

    const { setBoardSize, setPlayer1, setPlayer2,player1,player2} = props;

    // function details(event)
    // {
    //     setBoardSize(event.target.value);
    // }
    const boardHandler =(event)=>{
        if(+(event.target.value)===0)
        {
            setBoardSize(3);
        }
        else
        {
            setBoardSize(event.target.value);
            console.log(event.target.value,typeof(event.target.value));
        }
    }

    const player1Handler =(event)=>{
        setPlayer1(event.target.value)
    }

    const player2Handler =(event)=>{
        setPlayer2(event.target.value)
    }
    const formValid = ()=>{
        if(player1.trim()==='' || player2.trim()===''){
            return true;
        }
        else{
            return false;
        }
    }

    // function settingName() {
    //     if(+(document.getElementById('board').value)===0)
    //     {
    //         setBoardSize(3);
    //     }
    //     else
    //     {
    //         setBoardSize(document.getElementById('board').value);
    //     }
    //     setPlayer1(document.getElementById('player1').value);
    //     setPlayer2(document.getElementById('player2').value);
        
    // }
    return (
        
        <div className='detailsContainer'>
            <div className='detailsBox'>

                <div>
                    <h2 className='head-tag'>Enter Player Details</h2>
                </div>
                <form>
                <div className='block'>
                    
                    <input id='board' type="number" onChange={boardHandler}  placeholder='Enter Board Size(default 3)' />
                    <input id='player1' type="text"  onChange={player1Handler} placeholder='Player 1' required/>
                    <input id='player2' type="text" onChange={player2Handler} placeholder='Player 2' required />
                    
                </div>
                <Link to="/Player"><div className='startButton' ><button disabled={formValid()}>START</button></div></Link>
                </form>

            </div>

     </div>
    )
}
