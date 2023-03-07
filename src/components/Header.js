
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
  function handleSelect(eventKey) {
    props.onSelect(eventKey);
  }

  return (
    <div style={{ textAlign: 'center' }}>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Car Selling Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" onSelect={handleSelect}>
        <Nav.Link eventKey="home" style={{marginRight: "20px"}}>Home</Nav.Link>
        <Nav.Link eventKey="cars" style={{marginRight: "20px"}}>Cars</Nav.Link>
        <Nav.Link eventKey="contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>


  );
}

export default Header;
