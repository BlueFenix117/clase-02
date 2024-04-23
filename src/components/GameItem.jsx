import React from 'react'

export const GameItem = () => {
  return (
    <li className='GameItem'>
        <span className='Icon Icon-check Icon-check--active'>V</span>
        <p className='Item-p'>Halo</p>
        <span className='Icon Icon-delete'>X</span>

    </li>
  )
}

export default GameItem