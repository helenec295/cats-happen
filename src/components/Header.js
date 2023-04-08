import "./Header.css"
import React from 'react'
import Cat from '../images/cat.jpg';

function Header() {
  return (
    <div className='header' style={{ backgroundImage: `url(${Cat})` }}>
        <h1>Cat Finder</h1>
    </div>
  )
}

export default Header