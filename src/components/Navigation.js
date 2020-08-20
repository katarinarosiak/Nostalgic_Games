
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Link to="/" className="navbar-brand">
        Games
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Memory" className="nav-link">
            Memory
          </Link>
          <Link to="/Snake" className="nav-link">
            Snake
          </Link>
          <Link to="/Minesweeper" className="nav-link">
            Minesweeper
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;