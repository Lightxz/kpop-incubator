import React, { Component } from "react";
import "./DepositedCard.css";
import mainLogo from "../../images/kpop-logo.png";
import subLogo from "../../images/BNB-logo.png";
import { Row, Col, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";

class DepositedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depositedLp: window.depositedLp,
    };
  }

  render() {
    return (
      <Col>
        <div className="card-item">
          <p>LP Deposited</p>
          <div className="d-flex deposited-container">
            <div className="deposited-information">
              <div className="logo-container">
                <img src={mainLogo} alt="KPOP" className="mainLogo" />
                <img src={subLogo} className="subLogo" alt="logo" />
              </div>
              <div>
                <div className="deposited-text-container">
                  <p className="header">
                    <NumberFormat
                      value={this.state.depositedLp}
                      decimalScale={4}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={" KPOP/BNB LP"}
                    />
                  </p>
                  <small className="subHeader">
                    <NumberFormat
                      value={this.state.depositedLp * window.lptValue}
                      decimalScale={4}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </small>
                </div>
              </div>
            </div>

            <div className="deposited-btn-container">
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
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default DepositedCard;
