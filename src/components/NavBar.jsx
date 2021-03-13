import { Navbar, Nav, Button } from "react-bootstrap";
import "../css/navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg" id="nav" className="tag">
      <Navbar.Brand href="#home" id="logo">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="list">
          <Nav.Link id="link" href="#about">
            About
          </Nav.Link>
          <Nav.Link id="link" href="#service">
            Services
          </Nav.Link>
          <Nav.Link id="link" href="#link">
            Case Studies
          </Nav.Link>
          <Nav.Link id="link" href="#container">
            Testimonials
          </Nav.Link>
          <Nav.Link id="link" href="#contact">
            Contact
          </Nav.Link>
          <Nav.Link>
            <Button id="navbutton" size="sm" variant="primary">
              Login
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
