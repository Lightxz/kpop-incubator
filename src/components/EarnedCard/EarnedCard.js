import React from "react";
import "./EarnedCard.css";
import kpopLogo from "../../images/kpop-logo.png";

import { Button } from "react-bootstrap";
import NumberFormat from "react-number-format";

const EarnedCard = (props) => {
  const { kpopEarned, handleClaim } = props;
  return (
    <div className="kpop-earned-container">
      <div className="kpop-earned-information-container">
        <div className="kpop-earned-information">
          <img className="earned-logo" src={kpopLogo} alt="logo" />
          <div className="kpop-earned-data-container">
            <p className="mb-0 kpop-token-earned">
              <NumberFormat
                value={kpopEarned}
                decimalScale={4}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" KFAN"}
              />
            </p>
            <small className="kpop-usd-earned">
              <NumberFormat
                value={kpopEarned * window.kpopUsdPrice}
                decimalScale={4}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </small>
          </div>
        </div>
      </div>

      <div className="kpop-earned-button-container  text-end">
        <Button className="claim-btn" onClick={handleClaim}>
          Claim
        </Button>
      </div>
    </div>
  );
};

export default EarnedCard;
