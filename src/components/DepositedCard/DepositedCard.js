import React, { Component } from 'react';
import "./DepositedCard.css";
import logo from "../../images/kpop-logo.png";
import { Row, Col, Button } from "react-bootstrap";
import NumberFormat from 'react-number-format';

class DepositedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depositedLp: window.depositedLp
    }
  }

  render() { 
    return (
      <Col>
        <div className="card-item">
          <p>LP Deposited</p>
          <Row className="d-flex align-items-center">
            <Col xs={2} sm={2} className="text-center">
              <img className="logo" src={logo} alt="logo" />
            </Col>
            <Col xs={4} sm={4}>
              <div className="fw-200">
                <p className="mb-0">
                  <NumberFormat value={this.state.depositedLp} decimalScale={5} displayType={'text'} thousandSeparator={true} suffix={' KPOP/BNB LP'} />
                </p>
                <small>
                  <NumberFormat value={this.state.depositedLp * window.lptValue } decimalScale={2} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </small>
              </div>
            </Col>
            <Col xs={6} sm={6} className="text-end">
              <Button
                className="deposited-btn"
                onClick={() => this.props.handleOpenModal("STAKE")}
              >
                Stake
              </Button>
              <Button
                className="deposited-btn"
                onClick={() => this.props.handleOpenModal("UNSTAKE")}
              >
                Unstake
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}
 
export default DepositedCard;