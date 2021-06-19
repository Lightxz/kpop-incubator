import React from "react";
import "./ActivePool.css";
import { Row, Col, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";

const ActivePool = (props) => {
  const {
    title,
    mainImage,
    secondaryImage,
    isComingSoon,
    emissionPerDay,
    annualRoi,
    tvl,
    learnMoreLink,
  } = props;

  return (
    <div className="active-pool-component">
      {isComingSoon && (
        <div className="coming-soon-overlay">
          <h1>Coming soon</h1>
        </div>
      )}

      {/* Medium devices and above only */}
      <div className={isComingSoon && "blurred-bg"}>
        <div className="d-none d-md-block">
          <Row className="d-flex align-items-center py-4">
            <Col className="pool-container d-flex" xs={4}>
              <div className="logo-container">
                <img src={mainImage} alt={title} className="mainLogo" />
                <img
                  src={secondaryImage}
                  className="subLogo"
                  alt="secondaryImage"
                />
              </div>

              <div className="d-flex text-container">
                <p className="header m-0">{title}</p>
                <p className="subheader m-0">Pancakeswap</p>
              </div>
            </Col>
            <Col xs={2} className={isComingSoon && "low-visibility"}>
              <div className="d-flex text-container m-0">
                <p className="header m-0">
                  <NumberFormat
                    value={emissionPerDay}
                    decimalScale={4}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </p>
                <p className="subheader m-0">KPOP/day</p>
              </div>
            </Col>
            <Col xs={2} className={isComingSoon && "low-visibility"}>
              <div className="d-flex roi-text-container m-0">
                <p className="m-0">
                  <strong className="roi-rate">
                    <NumberFormat
                      value={annualRoi / 365}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"%"}
                    />
                  </strong>
                  <span className="roi-freq">Daily</span>
                </p>
                <p className="m-0">
                  <strong className="roi-rate">
                    <NumberFormat
                      value={annualRoi / 52}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"%"}
                    />
                  </strong>
                  <span className="roi-freq">Weekly</span>
                </p>
                <p className="m-0">
                  <strong className="roi-rate">
                    <NumberFormat
                      value={annualRoi}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"%"}
                    />
                  </strong>
                  <span className="roi-freq">Annually</span>
                </p>
              </div>
            </Col>
            <Col xs={2} className={isComingSoon && "low-visibility"}>
              <div className="d-flex text-container m-0">
                <p className="header m-0">
                  <NumberFormat
                    value={tvl}
                    decimalScale={2}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={2}
              className={`text-center p-3  ${isComingSoon && "low-visibility"}`}
            >
              {learnMoreLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={learnMoreLink}
                >
                  <Button className="incubator-btn">Learn more</Button>
                </a>
              )}
            </Col>
          </Row>
        </div>

        {/* for medium devices and below only*/}
        <div className=" d-md-none">
          <div className="pool-container-card">
            <div className="pool-container d-flex">
              <div className="logo-container">
                <img src={mainImage} alt={title} className="mainLogo" />
                <img src={secondaryImage} className="subLogo" alt={title} />
              </div>

              <div className="d-flex text-container">
                <p className="header m-0">{title}</p>
                <p className="subheader m-0">Pancakeswap</p>
              </div>
            </div>
            <div
              className={`d-flex text-container m-0 ${
                isComingSoon && "low-visibility"
              }`}
            >
              <h2 className="pool-title-header">Emission per Day</h2>
              <p className="header m-0">
                <NumberFormat
                  value={emissionPerDay}
                  decimalScale={4}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="subheader m-0">KPOP/day</p>
            </div>
            <div
              className={`d-flex roi-text-container m-0 ${
                isComingSoon && "low-visibility"
              }`}
            >
              <h2 className="pool-title-header">ROI</h2>
              <p className="m-0">
                <strong className="roi-rate">
                  <NumberFormat
                    value={annualRoi / 365}
                    decimalScale={2}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"%"}
                  />
                </strong>
                <span className="roi-freq">Daily</span>
              </p>
              <p className="m-0">
                <strong className="roi-rate">
                  <NumberFormat
                    value={annualRoi / 52}
                    decimalScale={2}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"%"}
                  />
                </strong>
                <span className="roi-freq">Weekly</span>
              </p>
              <p className="m-0">
                <strong className="roi-rate">
                  <NumberFormat
                    value={annualRoi}
                    decimalScale={2}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"%"}
                  />
                </strong>
                <span className="roi-freq">Annually</span>
              </p>
            </div>
            <div className={isComingSoon && "low-visibility"}>
              <h2 className="pool-title-header">TVL</h2>
              <p className="header m-0 text-white">
                <NumberFormat
                  value={tvl}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
            </div>
            {learnMoreLink && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={learnMoreLink}
                className="d-flex justify-content-center m-3 learn-more-button-link"
              >
                <Button className="incubator-btn">Learn more</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePool;
