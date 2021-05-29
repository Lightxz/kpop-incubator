import React from "react";
import "./KpopStand.css";
import KpopEarned from "../../components/KpopEarned/KpopEarned";
import DepositedCard from "../../components/DepositedCard/DepositedCard";
import { Container, Row } from "react-bootstrap";

function KpopStand(props) {
  return (
    <>
      <section className="kpop-stand">
        <Container>
          <p className="kpop-stand-text">KPOP Stand</p>
          <hr></hr>
          <KpopEarned />
          <div className="deposited">
            <div class="accordion" id="deposited-accordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="item-heading">
                  <button
                    class="accordion-button collapsed"
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
                  class="accordion-collapse collapse"
                  aria-labelledby="item-heading"
                  data-bs-parent="#deposited-accordion"
                >
                  <div class="accordion-body">
                    <Row>
                      <DepositedCard />
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
