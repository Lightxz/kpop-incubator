import React, { Component } from "react";
import "./ActivePools.css";
import Web3 from "web3";
import { Container, Row, Col } from "react-bootstrap";
import mainLogo from "../../images/kpop-logo.png";
import bnbLogo from "../../images/BNB-logo.png";
import busdLogo from "../../images/busd-logo.png";
import ActivePool from "../ActivePool/ActivePool";

class ActivePools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tvl: 0,
      annualRoi: 0,
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
      annualRoi: ((60000000 * window.kpopUsdPrice) / this.state.tvl) * 100,
    });
    // set daily rewards per thousend $
    this.setState({
      dailyPerThousand:
        ((this.state.annualRoi / 100) * 1000) / window.kpopUsdPrice,
    });
  }

  render() {
    return (
      <section className="active-pools">
        <Container className="active-pool-content">
          <p className="kpop-stand-text">Active Incubator</p>
          <div className="d-none d-md-block">
            <hr />
            <Row className=" d-flex align-items-center">
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
          </div>

          <ActivePool
            title="KPOP/BNB"
            mainImage={mainLogo}
            secondaryImage={bnbLogo}
            emissionPerDay={this.state.dailyPerThousand}
            annualRoi={this.state.annualRoi}
            tvl={this.state.tvl}
            learnMoreLink="https://kpopfantoken.medium.com/liquidity-mining-with-kpop-fan-token-d847ff6ba64f?postPublishedType=initial"
          />

          <ActivePool
            isComingSoon
            title="KPOP/BUSD"
            mainImage={mainLogo}
            secondaryImage={busdLogo}
            emissionPerDay={"12342332.4321123123123"}
            annualRoi={"560"}
            tvl={"2381237684.213124"}
            // learnMoreLink="https://kpopfantoken.medium.com/liquidity-mining-with-kpop-fan-token-d847ff6ba64f?postPublishedType=initial"
          />
        </Container>
      </section>
    );
  }
}

export default ActivePools;
