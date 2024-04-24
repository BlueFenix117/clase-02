import React from 'react'

export const GameCounter = (props) => {
  return (
    <h2 className='GameCounter'>
        Has Completado <span>{props.completed}</span> de <span>{props.total}</span> juegos
    </h2>
  )
}

export default GameCounter