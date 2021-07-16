import React from 'react'
import './header.css'
import Typed from 'react-typed'

function Header() {
  return (
      <div className="main-info">
        <h1>What am I?</h1>
        <Typed
          className="typed-text"
          strings={[
            " ", 
            "A Software Engineer", 
            "Also known as an", 
            "Front-end developer", 
            "Back-end developer", 
            "Full stack developer", 
            "Or!", 
            '"a coder"', 
            " ", 
            " "]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
  )
}

export default Header
