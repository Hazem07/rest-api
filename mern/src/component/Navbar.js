import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/">
            <Navbar.Brand href="#home">MERN</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Button className="aaa" variant="outline-secondary">
                <NavLink to="/">Home</NavLink>
              </Button>
              <Button className="aaa" variant="outline-secondary">
                <Link to="/contactlist">Contacts</Link>
              </Button>
              <Button className="aaa" variant="outline-secondary">
                <Link to="/add">Add Contacts</Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
