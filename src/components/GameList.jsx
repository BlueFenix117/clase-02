import React from 'react'

export const GameList = (props) => {
  return (
    <ul className='GameList'>
        {props.children}
    </ul>
  )
}

export default GameList