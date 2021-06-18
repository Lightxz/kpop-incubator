import React, { Component } from "react";
import "./ActivePools.css";
import Web3 from "web3";
import { Container, Row, Col, Button } from "react-bootstrap";
import mainLogo from "../../images/kpop-logo.png";
import subLogo from "../../images/BNB-logo.png";
import NumberFormat from "react-number-format";

class ActivePools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tvl: 0,
      apy: 0,
      dailyPerThousand: 0,
    };
  }

  async componentDidMount() {
    // calculate tvl
    let web3 = window.w3;
    let lpToken = new web3.eth.Contract(
      window.erc20_abi,
      "0x83Ca76Bdc2e454E362826c25b8F4Abd0791Bb594"
    );
    let totalLPLocked = await lpToken.methods
      .balanceOf(window.farming_address)
      .call();
    totalLPLocked = Web3.utils.fromWei(totalLPLocked);
    this.setState({ tvl: totalLPLocked * window.lptValue });
    // calculate yearly apy (yearly kpop distributed value / total locked value)
    this.setState({
      apy: ((60000000 * window.kpopUsdPrice) / this.state.tvl) * 100,
    });
    // set daily rewards per thousend $
    this.setState({
      dailyPerThousand: ((this.state.apy / 100) * 1000) / window.kpopUsdPrice,
    });
  }

  render() {
    return (
      <section className="active-pools">
        {/* Medium devices and above only */}
        <Container className="d-none d-md-block">
          <p className="kpop-stand-text">Active Incubator</p>
          <hr />
          <Row className="d-flex align-items-center">
            <Col xs={4}>
              <p className="m-0 header-text">Pool</p>
            </Col>
            <Col xs={2}>
              <p className="m-0 header-text">Emission per Day</p>
            </Col>
            <Col xs={2}>
              <p className="m-0 header-text">ROI</p>
            </Col>
            <Col xs={2}>
              <p className="m-0 header-text">TVL</p>
            </Col>
            <Col xs={1} className="d-none d-lg-block">
              <p className="m-0 header-text"></p>
            </Col>
          </Row>
          <hr />
          <Row className="d-flex align-items-center py-4">
            <Col className="pool-container d-flex" xs={4}>
              <div className="logo-container">
                <img src={mainLogo} alt="KPOP" className="mainLogo" />
                <img src={subLogo} className="subLogo" alt="logo" />
              </div>

              <div className="d-flex text-container">
                <p className="header m-0">KPOP/BNB</p>
                <p className="subheader m-0">Pancakeswap V2</p>
              </div>
            </Col>
            <Col xs={2}>
              <div className="d-flex text-container m-0">
                <p className="header m-0">
                  <NumberFormat
                    value={this.state.dailyPerThousand}
                    decimalScale={4}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </p>
                <p className="subheader m-0">KPOP/day</p>
              </div>
            </Col>
            <Col xs={2}>
              <div className="d-flex roi-text-container m-0">
                <p className="m-0">
                  <strong className="roi-rate">
                    <NumberFormat
                      value={this.state.apy / 365}
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
                      value={this.state.apy / 52}
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
                      value={this.state.apy}
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
            <Col xs={2}>
              <div className="d-flex text-container m-0">
                <p className="header m-0">
                  <NumberFormat
                    value={this.state.tvl}
                    decimalScale={2}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} className="text-center p-3">
              {/* <a href={"https://bscscan.com/address/"+window.farming_address} > */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://kpopfantoken.medium.com/liquidity-mining-with-kpop-fan-token-d847ff6ba64f?postPublishedType=initial"
              >
                <Button className="incubator-btn">Learn more</Button>
              </a>
            </Col>
          </Row>
        </Container>

        {/* for medium devices and below only*/}
        <Container className=" d-md-none">
          <p className="kpop-stand-text">Active Incubator</p>
          <hr />
          <div className="pool-container-card">
            <div className="pool-container d-flex">
              <div className="logo-container">
                <img src={mainLogo} alt="KPOP" className="mainLogo" />
                <img src={subLogo} className="subLogo" alt="logo" />
              </div>

              <div className="d-flex text-container">
                <p className="header m-0">KPOP/BNB</p>
                <p className="subheader m-0">Pancakeswap V2</p>
              </div>
            </div>
            <div className="d-flex text-container m-0">
              <h2 className="pool-title-header">Emission per Day</h2>
              <p className="header m-0">
                <NumberFormat
                  value={this.state.dailyPerThousand}
                  decimalScale={4}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="subheader m-0">KPOP/day</p>
            </div>
            <div className="d-flex roi-text-container m-0">
              <h2 className="pool-title-header">ROI</h2>
              <p className="m-0">
                <strong className="roi-rate">
                  <NumberFormat
                    value={this.state.apy / 365}
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
                    value={this.state.apy / 52}
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
                    value={this.state.apy}
                    decimalScale={2}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"%"}
                  />
                </strong>
                <span className="roi-freq">Annually</span>
              </p>
            </div>
            <div>
              <h2 className="pool-title-header">TVL</h2>
              <p className="header m-0 text-white">
                <NumberFormat
                  value={this.state.tvl}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kpopfantoken.medium.com/liquidity-mining-with-kpop-fan-token-d847ff6ba64f?postPublishedType=initial"
              className="d-flex justify-content-center m-3 learn-more-button-link"
            >
              <Button className="incubator-btn">Learn more</Button>
            </a>
          </div>
        </Container>
      </section>
    );
  }
}

export default ActivePools;
