import React from 'react'

export const GameCounter = (props) => {

  if (props.completed==props.total){
    return (
      <h2 className='GameCounter'>
          Has Completado todos los juegos
      </h2>
    )
  }else
  {
    return (
      <h2 className='GameCounter'>
          Has Completado <span>{props.completed}</span> de <span>{props.total}</span> juegos
      </h2>
    )
  }

  
}

export default GameCounter