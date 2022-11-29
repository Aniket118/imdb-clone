/* rfc -> react functional component */
import React from 'react'
import '../styles/navbar.css'

export default function NavBar({ setInputValue, inputValue, search }) {
  return (
    <div className='navbar'>
      <span className='heading'>MOVIE DB</span>
      <input
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      onKeyPress={search}
      type='text'
      placeholder='search...'
      className='search-bar'
      />
    </div>
  )
}
