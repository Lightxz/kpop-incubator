import React from "react";
import "./ActivePools.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../../images/kpop-logo.png";

function ActivePools() {
  return (
    <section className="active-pools">
      <Container>
        <p className="kpop-stand-text">Active Incubator</p>
        <hr />
        <Row className="d-flex align-items-center">
          <Col xs={4}>
            <p className="m-0 header-text">Pool</p>
          </Col>
          <Col>
            <p className="m-0 header-text">Yield per $1000</p>
          </Col>
          <Col>
            <p className="m-0 header-text">ROI</p>
          </Col>
          <Col>
            <p className="m-0 header-text">TVL</p>
          </Col>
          <Col lg={2} className="d-none d-lg-block">
            <p className="m-0 header-text"></p>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex align-items-center py-4">
          <Col className="pool-container d-flex" xs={4}>
            <img src={logo} alt="KPOP" className="image" />
            <div className="d-flex text-container">
              <p className="header m-0">KPOP/BNB</p>
              <p className="subheader m-0">Pancakeswap V2</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex text-container">
              <p className="header m-0">3.97</p>
              <p className="subheader m-0">KPOP/day</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex roi-text-container">
              <p className="m-0">
                <strong className="roi-rate">0.837%</strong>
                <span className="roi-freq">Daily</span>
              </p>
              <p className="m-0">
                <strong className="roi-rate">0.837%</strong>
                <span className="roi-freq">Weekly</span>
              </p>
              <p className="m-0">
                <strong className="roi-rate">0.837%</strong>
                <span className="roi-freq">Annualy</span>
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex text-container">
              <p className="header m-0">$1,813,550</p>
            </div>
          </Col>
          <Col md={12} lg={2} className="text-center p-3">
            <Button className="incubator-btn">Start Incubator</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ActivePools;
