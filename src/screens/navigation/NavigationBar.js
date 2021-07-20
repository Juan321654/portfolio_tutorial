import React from 'react'
import './navigationBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}

function NavigationBar() {
  return (
    <Navbar id="home" className="navigation__container" style={{ zIndex: '2' }} collapseOnSelect expand="md">
      <Navbar.Brand style={{ marginLeft: '1rem' }} href="#home">Juan Camacho</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none' }}>
        <Nav className="links" style={{ margin: '0 1rem' }}>
          {createLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
