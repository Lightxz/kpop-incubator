import React from "react";
import "./KpopStand.css";
import KpopEarned from "../../components/KpopEarned/KpopEarned";
import DepositedCard from "../../components/DepositedCard/DepositedCard";
import KPOPLogo from "../../images/kpop-logo.png";
import { Container, Row } from "react-bootstrap";

import mainImage from "../../images/kpop-logo.png";
import bnbLogo from "../../images/BNB-logo.png";
import busdLogo from "../../images/busd-logo.png";

function KpopStand(props) {
  const { handleOpenModal } = props;
  const kpopUsdPrice = window.kpopUsdPrice
    ? Number(window.kpopUsdPrice)?.toFixed(4)
    : 0;

  return (
    <>
      <section className="kpop-stand">
        <Container>
          <div className="kpop-stand-header-container">
            <p className="kpop-stand-text">KPOP Incubator</p>
            <div className="price-container">
              <img src={KPOPLogo} alt="KPOP" className="value-logo" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x83ca76bdc2e454e362826c25b8f4abd0791bb594"
                className="kpop-usd-price"
              >{`$ ${kpopUsdPrice}`}</a>
            </div>
          </div>

          <hr></hr>
          <KpopEarned />
          <div className="deposited">
            <div className="accordion" id="deposited-accordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="item-heading">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Deposited
                  </button>
                </h2>
                <hr></hr>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="item-heading"
                  data-bs-parent="#deposited-accordion"
                >
                  <div className="accordion-body ">
                    <Row>
                      <DepositedCard
                        title="KPOP/BNB LP"
                        mainImage={mainImage}
                        secondaryImage={bnbLogo}
                        handleOpenModal={handleOpenModal}
                        lpDeposited={window.depositedLp}
                      />

                      <DepositedCard
                        isComingSoon
                        title="KPOP/BUSD LP"
                        mainImage={mainImage}
                        secondaryImage={busdLogo}
                        handleOpenModal={handleOpenModal}
                        lpDeposited={0}
                      />
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default KpopStand;
