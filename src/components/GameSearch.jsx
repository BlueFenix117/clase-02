import React from 'react'


export const GameSearch = (props) => {

  return (
    <input 
    className='GameSearch' 
    placeholder='Phasmophobia'
    value = {props.searchValue} 
    onChange= {(event) => {
      props.setSearchValue(event.target.value)
    } }
    />
  )
}

export default GameSearch