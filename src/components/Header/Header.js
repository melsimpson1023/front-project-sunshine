import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Blogs" className="collapsible-nav-dropdown">
      <NavDropdown.Item href="#blog-index">View Blogs</NavDropdown.Item>
      <NavDropdown.Item href="#blogcreate">Create a Blog</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Motivational Videos" className="collapsible-nav-dropdown">
      <NavDropdown.Item href="#lightupthedarkness">Light Up The Darkness</NavDropdown.Item>
      <NavDropdown.Item href="#ifyoucandream">IF... You can Dream</NavDropdown.Item>
      <NavDropdown.Item href="#ifyouwanttochangetheworld">If You Want To Change The World</NavDropdown.Item>
      <NavDropdown.Item href="#watchthiseveryday">Watch This Everyday</NavDropdown.Item>
      <NavDropdown.Item href="#lifeisnotfair">Life Is Not Fair</NavDropdown.Item>
      <NavDropdown.Item href="#themosteyeopening">The Most Eye Opening 10 Minutes Of Your Life</NavDropdown.Item>
      <NavDropdown.Item href="#lonesurvivor">Lone Survivor Intro - Navy Seals training</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#article">Articles</Nav.Link>
    <NavDropdown title="Settings" className="collapsible-nav-dropdown">
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#about">About</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="light" variant="light" expand="md">
    <Navbar.Brand href="#">
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
