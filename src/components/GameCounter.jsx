import React from 'react'

export const GameCounter = (props) => {
    return (
      <React.Fragment>
        {(props.completed === props.total) ?
        <h2 className='GameCounter'>
          Has Completado todos los juegos
        </h2> :
        <h2 className='GameCounter'>
          Has Completado <span>{props.completed}</span> de <span>{props.total}</span> juegos
        </h2>}
  </React.Fragment>
    )
}

export default GameCounter