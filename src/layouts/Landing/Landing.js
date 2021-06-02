import React from "react";
import "./Landing.css";
import { Container } from "react-bootstrap";
import lightStick1 from "../../images/light-stick1.svg";
import lightStick2 from "../../images/light-stick2.svg";

function Landing(props) {
  return (
    <>
      <section className="landing">
        <Container>
          <div className="title">
            <div className="light-stick">
              <img src={lightStick1} alt="light stick 1" />
            </div>
            <div className="title-content">
              <h1>Welcome to KPOP Incubator</h1>
              <h2>Start your idol journey now!</h2>
            </div>
            <div className="light-stick">
              <img src={lightStick2} alt="light stick 2" />
            </div>
          </div>
          <hr></hr>
        </Container>
      </section>
    </>
  );
}

export default Landing;
