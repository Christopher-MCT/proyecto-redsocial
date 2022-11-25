import React from 'react';
import { useSelector } from 'react-redux';
import "./TaskMain.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faImage,  faFaceLaughBeam} from '@fortawesome/free-solid-svg-icons';



function Forms() {
  console.log("taskform");

  const stateTask = useSelector ((state) => state.tasks);



return(
  
    <div className='Box-item'>
    <div className='image-user'></div>
    
    <input className='input-form' placeholder='¿Cuentanos tu como te sientes? '/> 
    <hr className='hr'/>
    <button  className='button'> <FontAwesomeIcon className='icono1' icon={faPlusSquare}/>  Crear publicacion</button>
    <button  className='button'><FontAwesomeIcon className='icono2' icon={faImage}/>  Foto / video</button>
    <button  className='button'><FontAwesomeIcon className='icono3' icon={faFaceLaughBeam}/>  Feeling / activity </button>

      
    </div>
  )
}

export default Forms;

