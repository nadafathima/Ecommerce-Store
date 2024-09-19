import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
      <footer className='footer'>
        &copy; E-Commerce {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Footer
