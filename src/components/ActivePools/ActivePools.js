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
      BUSD_tvl: 0,
      BUSD_annualRoi: 0,
      BUSD_dailyPerThousand: 0,
    };
  }

  async componentDidMount() {
    let web3 = window.w3;
    // // KPOP/BNB
    // // calculate tvl
    // let lpToken = new web3.eth.Contract(
    //   window.erc20_abi,
    //   window.KPOP_BNB_SMART_CONTRACT
    // );
    // let totalLPLocked = await lpToken.methods
    //   .balanceOf(window.KPOP_BNB_FARMING_ADDRESS)
    //   .call();
    // totalLPLocked = Web3.utils.fromWei(totalLPLocked);
    // this.setState({ tvl: totalLPLocked * window.lptValue });
    // // calculate yearly apy (yearly kpop distributed value / total locked value)
    // this.setState({
    //   annualRoi: ((60000000 * window.kpopUsdPrice) / this.state.tvl) * 100,
    // });
    // // set daily rewards per thousend $
    // this.setState({
    //   dailyPerThousand:
    //     ((this.state.annualRoi / 100) * 1000) / window.kpopUsdPrice,
    // });

    // KPOP/BUSD
    // calculate tvl
    let BUSD_lpToken = new web3.eth.Contract(
      window.erc20_abi,
      window.KPOP_BUSD_SMART_CONTRACT
    );

    let BUSD_totalLPLocked = await BUSD_lpToken.methods
      .balanceOf(window.KPOP_BUSD_FARMING_ADDRESS)
      .call();

    BUSD_totalLPLocked = Web3.utils.fromWei(BUSD_totalLPLocked);
    this.setState({ BUSD_tvl: BUSD_totalLPLocked * window.BUSD_lptValue });

    // calculate yearly apy (yearly kpop distributed value / total locked value)
    this.setState({
      BUSD_annualRoi:
        ((60000000 * window.kpopUsdPrice) / this.state.BUSD_tvl) * 100,
    });
    // set daily rewards per thousend $
    this.setState({
      BUSD_dailyPerThousand:
        ((this.state.BUSD_annualRoi / 100) * 1000) / window.kpopUsdPrice,
    });

    // // KPOP
    // // calculate tvl
    // let KPOP_lpToken = new web3.eth.Contract(
    //   window.erc20_abi,
    //   window.KPOP_SMART_CONTRACT
    // );

    // let KPOP_totalLPLocked = await KPOP_lpToken.methods
    //   .balanceOf(window.KPOP_FARMING_ADDRESS)
    //   .call();

    // KPOP_totalLPLocked = Web3.utils.fromWei(KPOP_totalLPLocked);
    // this.setState({ KPOP_tvl: KPOP_totalLPLocked * window.kpopUsdPrice });

    // // calculate yearly apy (yearly kpop distributed value / total locked value)
    // this.setState({
    //   KPOP_annualRoi:
    //     ((60000000 * window.kpopUsdPrice) / this.state.KPOP_tvl) * 100,
    // });
    // // set daily rewards per thousend $
    // this.setState({
    //   KPOP_dailyPerThousand:
    //     ((this.state.KPOP_annualRoi / 100) * 1000) / window.kpopUsdPrice,
    // });

    // KFAN
    // calculate tvl
    let KFAN_lpToken = new web3.eth.Contract(
      window.erc20_abi,
      window.KFAN_SMART_CONTRACT
    );

    let KFAN_totalLPLocked = await KFAN_lpToken.methods
      .balanceOf(window.KFAN_FARMING_ADDRESS)
      .call();

    KFAN_totalLPLocked = Web3.utils.fromWei(KFAN_totalLPLocked);
    this.setState({ KFAN_tvl: KFAN_totalLPLocked * window.kfanUsdPrice });

    // calculate yearly apy (yearly kpop distributed value / total locked value)
    this.setState({
      KFAN_annualRoi:
        ((60000000 * window.kfanUsdPrice) / this.state.KFAN_tvl) * 100,
    });
    // set daily rewards per thousend $

    this.setState({
      KFAN_dailyPerThousand:
        ((this.state.KFAN_annualRoi / 100) * 1000) / window.kfanUsdPrice,
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

          {/* <ActivePool
            title="KPOP"
            mainImage={mainLogo}
            emissionPerDay={this.state.KPOP_dailyPerThousand}
            annualRoi={this.state.KPOP_annualRoi}
            tvl={this.state.KPOP_tvl}
          /> */}
          <ActivePool
            title="KFan"
            mainImage={mainLogo}
            emissionPerDay={this.state.KFAN_dailyPerThousand}
            annualRoi={this.state.KFAN_annualRoi}
            tvl={this.state.KFAN_tvl}
          />

          {/* <ActivePool
            title="KPOP/BNB"
            mainImage={mainLogo}
            secondaryImage={bnbLogo}
            emissionPerDay={this.state.dailyPerThousand}
            annualRoi={this.state.annualRoi}
            tvl={this.state.tvl}
            learnMoreLink="https://kpopfantoken.medium.com/liquidity-mining-with-kpop-fan-token-d847ff6ba64f?postPublishedType=initial"
          /> */}

          <ActivePool
            isComingSoon={false}
            title="KFan/BUSD"
            mainImage={mainLogo}
            secondaryImage={busdLogo}
            emissionPerDay={this.state.BUSD_dailyPerThousand}
            annualRoi={this.state.BUSD_annualRoi}
            tvl={this.state.BUSD_tvl}
            // learnMoreLink="https://kpopfantoken.medium.com/liquidity-mining-with-kpop-fan-token-d847ff6ba64f?postPublishedType=initial"
          />
        </Container>
      </section>
    );
  }
}

export default ActivePools;
