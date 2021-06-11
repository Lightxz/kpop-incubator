import React from "react";
import "./KpopStand.css";
import KpopEarned from "../../components/KpopEarned/KpopEarned";
import DepositedCard from "../../components/DepositedCard/DepositedCard";
import KPOPLogo from "../../images/kpop-logo.png";
import { Container, Row } from "react-bootstrap";

function KpopStand(props) {
  const { handleOpenModal } = props;

  return (
    <>
      <section className="kpop-stand">
        <Container>
          <div className="kpop-stand-header-container">
            <p className="kpop-stand-text">KPOP Incubator</p>
            <div className="price-container">
              <img src={KPOPLogo} alt="KPOP" className="value-logo" />
              <p className="m-0">{`$ ${
                Number(window.kpopUsdPrice)?.toFixed(3) || 0
              }`}</p>
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
                      <DepositedCard handleOpenModal={handleOpenModal} />
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
