import React from 'react'
import './navigationBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavigationBar() {
  return (
      <Navbar className="navigation__container" style={{zIndex: '2'}} collapseOnSelect  expand="md">
        <Navbar.Brand style={{marginLeft: '1rem'}} href="#home">Juan Camacho</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none'}}>
          <Nav className="links" style={{margin: '0 1rem'}}>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about-me">ABOUT ME</Nav.Link>
            <Nav.Link href="#technologies">TECHNOLOGIES</Nav.Link>
            <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavigationBar
