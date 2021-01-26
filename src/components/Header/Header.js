import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.scss'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Blogs" className="collapsible-nav-dropdown Home" >
      <NavDropdown.Item href="#blog-index" className="Color">View Blogs</NavDropdown.Item>
      <NavDropdown.Item href="#blogcreate" className="Color">Create a Blog</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Motivational Videos" className="collapsible-nav-dropdown Home">
      <NavDropdown.Item href="#lightupthedarkness" className="Color">Light Up The Darkness</NavDropdown.Item>
      <NavDropdown.Item href="#ifyoucandream" className="Color">IF... You can Dream</NavDropdown.Item>
      <NavDropdown.Item href="#ifyouwanttochangetheworld" className="Color">If You Want To Change The World</NavDropdown.Item>
      <NavDropdown.Item href="#watchthiseveryday" className="Color">Watch This Everyday</NavDropdown.Item>
      <NavDropdown.Item href="#lifeisnotfair" className="Color">Life Is Not Fair</NavDropdown.Item>
      <NavDropdown.Item href="#themosteyeopening" className="Color">The Most Eye Opening 10 Minutes Of Your Life</NavDropdown.Item>
      <NavDropdown.Item href="#lonesurvivor" className="Color">Lone Survivor Intro - Navy Seals training</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Settings" className="collapsible-nav-dropdown Home">
      <NavDropdown.Item href="#change-password" className="Color">Change Password</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#sign-out" className="Color">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up" className="Home">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in" className="Home">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#home" className="Home">Home</Nav.Link>
    <Nav.Link href="#about" className="Home">About</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant="light" expand="md" className="navbarStyle">
    <Navbar.Brand href="#home">
      Lux
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
