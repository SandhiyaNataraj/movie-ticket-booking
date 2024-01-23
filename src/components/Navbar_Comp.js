import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Navbar_Comp() {
  const violetColor = { color: 'red' };
  const bookYourShowColor = { color: 'blue' }; 
  const viewCitiesColor = { color: 'green' }; 
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <img
        src="https://api.logo.com/api/v2/images?logo=logo_f9f518ad-3af3-44c6-ac96-3fe48d51fc5a&u=1702534296&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"
        style={{ width: '250px', height: '100px' }}
        alt="Logo"
      />
      <Container>
        <Navbar.Brand href="#home" style={bookYourShowColor}>
          Cinova
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={violetColor}>
              <Link to="/movie" style={{textDecoration:'none',color:'inherit'}}>
              Movies
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing" style={violetColor}>
              <Link to="/stream" style={{textDecoration:'none',color:'inherit'}}>
              Stream
              </Link>
            </Nav.Link>
            <NavDropdown title="Coimbatore" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={violetColor}>
               Chennai
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={violetColor}>
               Bangalore
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" style={violetColor}>
              Hyderabad
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={violetColor}>
                Mumbai
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={viewCitiesColor}>
                View all popular cities
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                style={violetColor}
              />
              <Button variant="outline-success" style={violetColor}>
                Search
              </Button>
            </Form>
            <Nav.Link href="#deets" style={bookYourShowColor}>
             <Link to="/login" style={{textDecoration:'none',color:'inherit'}}>
              Login
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={bookYourShowColor}>
              <Link to="/register" style={{textDecoration:'none',color:'inherit'}}>
              Register
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

  );
}

export default Navbar_Comp;

