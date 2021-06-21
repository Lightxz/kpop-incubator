import React from "react";
import logo from "../../images/kpop-logo.png";
import "./Navbar.css";

import { Nav, Container } from "react-bootstrap";

// Images
import bscanLogo from "../../images/bscan-logo.jpeg";
import dextoolsLogo from "../../images/dextools-logo.png";

function Navbar(props) {
  const { handleConnect, isWalletConnected } = props;
  const userAccountId =
    window.account?.substring(0, 5) +
    "..." +
    window.account?.substring(window.account.length - 4, window.account.length);

  return (
    <>
      <div className="announcement-container">
        <a
          href="https://bscscan.com/address/0x3ba2b1c2c46200e826c56550ff7a2b29bad10f3d"
          rel="noreferrer"
          target="_blank"
          className="announcement-link-container"
        >
          <img src={bscanLogo} alt="bscan" className="announcement-logo" />
          <span className="announcement-link text_underline">
            Official Token Contract
          </span>
        </a>

        <a
          href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x83ca76bdc2e454e362826c25b8f4abd0791bb594"
          rel="noreferrer"
          target="_blank"
          className="announcement-link-container"
        >
          <img src={dextoolsLogo} alt="bscan" className="announcement-logo" />
          <span className="announcement-link text_underline">
            Official KPOP Chart
          </span>
        </a>
      </div>

      <Nav>
        <Container className="nav-container">
          <Nav.Item className="nav-brand">
            <a
              href="https://kpop-digital.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img className="nav-logo" src={logo} alt="logo" />
              <p className="brand-name">
                <span>KPOP</span> DIGITAL
              </p>
            </a>
          </Nav.Item>

          <Nav.Item>
            {isWalletConnected ? (
              <Nav.Link onClick={(e) => e.preventDefault()}>
                {userAccountId}
              </Nav.Link>
            ) : (
              <Nav.Link onClick={handleConnect}>Start Incubator</Nav.Link>
            )}
          </Nav.Item>
        </Container>
      </Nav>
    </>
  );
}

export default Navbar;
