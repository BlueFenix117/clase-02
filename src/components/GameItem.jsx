import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export const GameItem = (props) => {
  return (
    <li className={`GameItem ${props.completed && "GameItem-Active"}`}>
        <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick = {props.onComplete}
        >
          <FaCheck />

        </span>
        
        <p className={`Item-p ${props.completed && "Item-p--complete"}`}>{props.text}</p>
        
        <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
        >
          <IoMdCloseCircle />

        </span>
    </li>
  )
}

export default GameItem