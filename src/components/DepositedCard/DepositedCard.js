import React from "react";
import "./DepositedCard.css";
import logo from "../../images/kpop-logo.png";
import { Row, Col, Button } from "react-bootstrap";

function DepositedCard(props) {
  const { handleOpenModal } = props;
  return (
    <>
      <Col>
        <div className="card-item">
          <p>LP Deposited</p>
          <Row className="d-flex align-items-center">
            <Col xs={2} sm={2} className="text-center">
              <img className="logo" src={logo} alt="logo" />
            </Col>
            <Col xs={4} sm={4}>
              <div className="fw-200">
                <p className="mb-0">KPOP/BNB</p>
                <small>$0.00</small>
              </div>
            </Col>
            <Col xs={6} sm={6} className="text-end">
              <Button
                className="deposited-btn"
                onClick={() => handleOpenModal("STAKE")}
              >
                Stake
              </Button>
              <Button
                className="deposited-btn"
                onClick={() => handleOpenModal("UNSTAKE")}
              >
                Unstake
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default DepositedCard;
