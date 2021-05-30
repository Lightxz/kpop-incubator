import React from "react";
import logo from "../../images/kpop-logo.png";
import { Row, Col, Button } from "react-bootstrap";
import "./KpopEarned.css";

function KpopEarned(props) {
  return (
    <>
      <div className="kpop-earned">
        <Row className="justify-content-between">
          <Col xs={6} sm={4}>
            <p className="kpop-earned-label">KPOP Earned</p>
            <Row className="d-flex align-items-center">
              <Col xs={5} sm={4} className="text-center">
                <img className="logo" src={logo} alt="logo" />
              </Col>
              <Col xs={5} sm={5} className="kpop-earned-bal">
                <p className="mb-0">$0.0000</p>
                <small>$0.0000</small>
              </Col>
            </Row>
          </Col>

          <Col xs={6} sm={4} className="text-end">
            <p className="mb-4 kpop-earned-label">BSC</p>
            <Row className="d-flex align-items-center">
              <Col sm={11}>
                <Button className="claim-btn">Claim</Button>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default KpopEarned;
