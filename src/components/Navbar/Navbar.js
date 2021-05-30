import React from "react";
import logo from "../../images/kpop-logo.png";
import "./Navbar.css";

import { Nav, Container } from "react-bootstrap";

function Navbar(props) {
  const { handleConnect } = props;
  return (
    <>
      <Nav>
        <Container className="nav-container">
          <Nav.Item className="nav-brand">
            <Nav.Link href="/">
              <img className="logo" src={logo} alt="logo" />
              <p className="brand-name">
                <span>KPOP</span> DIGITAL
              </p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link onClick={handleConnect}>
              <span>Connect</span>
            </Nav.Link>
          </Nav.Item>
        </Container>
      </Nav>
    </>
  );
}

export default Navbar;
