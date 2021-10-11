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
  const kpopUsdPrice = window.kpopUsdPrice
    ? Number(window.kpopUsdPrice)?.toFixed(4)
    : 0;

  return (
    <>
      <section className="kpop-stand">
        <Container>
          <div className="kpop-stand-header-container">
            <p className="kpop-stand-text">KFAN Incubator</p>
            <div className="price-container">
              <img src={KPOPLogo} alt="KPOP" className="value-logo" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://poocoin.app/tokens/0x8efef94ea1b04aa02814f0f5c7a7389dabdb6d6a"
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
                    <Row justicy>
                      {/* <DepositedCard
                        title="KPOP Tokens"
                        mainImage={mainImage}
                        availableBalance={window.KPOP_lpBalance}
                        withdrawableBalance={window.KPOP_depositedLp}
                        smart_contract={window.KPOP_SMART_CONTRACT}
                        farming_address={window.KPOP_FARMING_ADDRESS}
                        lptValue={window.kpopUsdPrice}
                      /> */}

                      <DepositedCard
                        title="KFan Tokens"
                        mainImage={mainImage}
                        availableBalance={window.KFAN_lpBalance}
                        withdrawableBalance={window.KFAN_depositedLp}
                        smart_contract={window.KFAN_SMART_CONTRACT}
                        farming_address={window.KFAN_FARMING_ADDRESS}
                        lptValue={window.kfanUsdPrice}
                      />

                      {/* <DepositedCard
                        title="KPOP/BNB LP"
                        mainImage={mainImage}
                        secondaryImage={bnbLogo}
                        availableBalance={window.lpBalance}
                        withdrawableBalance={window.depositedLp}
                        smart_contract={window.KPOP_BNB_SMART_CONTRACT}
                        farming_address={window.KPOP_BNB_FARMING_ADDRESS}
                        lptValue={window.lptValue}
                      /> */}

                      <DepositedCard
                        isComingSoon={false}
                        title="KFan/BUSD LP"
                        mainImage={mainImage}
                        secondaryImage={busdLogo}
                        availableBalance={window.BUSD_lpBalance}
                        withdrawableBalance={window.BUSD_depositedLp}
                        smart_contract={window.KPOP_BUSD_SMART_CONTRACT}
                        farming_address={window.KPOP_BUSD_FARMING_ADDRESS}
                        lptValue={window.BUSD_lptValue}
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
