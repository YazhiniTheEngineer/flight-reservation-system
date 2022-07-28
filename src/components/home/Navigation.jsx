import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

function Navigation() {

    const [signupmodalShow, setSignupModalShow] = useState(false);
    const [loginmodalShow, setLoginModalShow] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
          <Nav.Link ><Button onClick={() => setSignupModalShow(true)}>Sign Up</Button></Nav.Link>
          <SignUpModal
            show={signupmodalShow}
            onHide={() => setSignupModalShow(false)}
          />
          <Nav.Link eventKey={2}><Button className="btn-secondary" onClick={() => setLoginModalShow(true)}>Log In</Button></Nav.Link>
          <LoginModal
            show={loginmodalShow}
            onHide={() => setLoginModalShow(false)}
          />
        </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
  );
}

export default Navigation;