import React from "react";
import "./DepositedCard.css";
import { Col, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";

const DepositedCard = (props) => {
  const {
    lpDeposited,
    isComingSoon,
    mainImage,
    secondaryImage,
    title,
    handleOpenModal,
  } = props;

  return (
    <Col style={{ position: "relative" }}>
      {isComingSoon && (
        <div className="coming-soon-overlay">
          <h1>Coming soon</h1>
        </div>
      )}

      <div className={`card-item ${isComingSoon && "blurred-bg"}`}>
        <p>LP Deposited</p>
        <div className="d-flex deposited-container">
          <div className="deposited-information">
            <div className="logo-container">
              <img src={mainImage} alt={title} className="mainLogo" />
              <img src={secondaryImage} className="subLogo" alt={title} />
            </div>
            <div>
              <div className="deposited-text-container">
                <p className="header">
                  <NumberFormat
                    value={lpDeposited}
                    decimalScale={4}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={` ${title}`}
                  />
                </p>
                <small className="subHeader">
                  <NumberFormat
                    value={lpDeposited * window.lptValue}
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
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DepositedCard;
