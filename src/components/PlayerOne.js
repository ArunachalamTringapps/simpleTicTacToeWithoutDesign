import React,{memo} from 'react'
import '../styles/playerOneTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const PlayerOne = (props) => {
  const {XorO,player1} = props ;

  
  const BGC=XorO%2===0 ?'#66FF99': '#EEEEEE' ;
   
  return (
    <div className='pOne' >
       <div className='profile' style={{ backgroundColor:BGC }}>
        <div><FontAwesomeIcon icon={faUser} className="iconTwo" /></div>
        <h2>{player1}</h2>
      </div>
    </div>
  )
}

export default memo(PlayerOne)
