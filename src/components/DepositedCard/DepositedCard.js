import React from "react";
import "./DepositedCard.css";
import logo from "../../images/logo.png";
import { Row, Col, Button } from "react-bootstrap";

function DepositedCard(props) {
  return (
    <>
      <Col xs={12} sm={6}>
        <div className="card-item">
          <p>LP Deposited</p>
          <Row className="d-flex align-items-center">
            <Col xs={2} sm={2} className="text-center">
              <img class="logo" src={logo} alt="logo" />
            </Col>
            <Col xs={4} sm={4}>
              <div className="fw-200">
                <p class="mb-0">ICE/BNB Stand</p>
                <small>$0.00</small>
              </div>
            </Col>
            <Col xs={6} sm={6} className="text-end">
              <Button className="deposited-btn">Withdraw</Button>
              <Button className="deposited-btn">Claim</Button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default DepositedCard;
