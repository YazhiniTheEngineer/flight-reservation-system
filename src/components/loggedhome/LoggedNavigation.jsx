import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

function LoggedNavigation() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand href="#home">
  <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
    Brand Name</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link ><Button>Name</Button></Nav.Link>
      <Nav.Link eventKey={2}><Button className="btn-secondary">Log out</Button></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default LoggedNavigation;