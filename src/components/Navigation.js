import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Link to="/" className="navbar-brand">Game</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Memory">Memory</Nav.Link>
          <Nav.Link href="/Snake">Snake</Nav.Link>
          <Nav.Link href="/Minesweeper">Minesweeper</Nav.Link>

          <Link to="/Memory" className="navbar-brand">Memory</Link>
          <Link to="/Snake" className="navbar-brand">Snake</Link>
          <Link to="/Minesweeper" className="navbar-brand">Minesweeper</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;