import React,{memo} from 'react'
import '../styles/playerOneTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UseMyContext } from '../App';

const PlayerTwo = (props) => {
  const {XorO,player2} = props ;
  // const {XorO} = UseMyContext();
  const BGC=XorO%2===0 ? '#EEEEEE': '#66FF99';

  return (
    <div className='pOne'>
      <div className='profile'  style={{ backgroundColor:BGC }}>
        <div><FontAwesomeIcon icon={faUser} className="iconOne" /></div>
        <h2>{player2}</h2>
      </div>
      
    </div>
  )
}

export default memo(PlayerTwo)
