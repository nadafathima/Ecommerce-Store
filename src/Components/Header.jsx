import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <header className='header'>
        <Link to={'/'} style={{textDecoration:"none", color:"white"}}><h1 >E-Commerce Store</h1></Link>
        
        <Link to={'/logout'}>
          <button className='logout'>Logout</button>
        </Link>
      </header>
    </>
  )
}

export default Header
