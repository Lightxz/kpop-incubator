import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

import { Nav, Container } from "react-bootstrap";

function Navbar(props) {
  return (
    <>
      <Nav>
        <Container className="nav-container">
          <Nav.Item className="nav-brand">
            <Nav.Link href="/">
              <img class="logo" src={logo} alt="logo" />
              <p className="brand-name">
                <span>KPOP</span> DIGITAL
              </p>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/buy">
              <span>Buy Now</span>
            </Nav.Link>
          </Nav.Item>
        </Container>
      </Nav>
    </>
  );
}

export default Navbar;
