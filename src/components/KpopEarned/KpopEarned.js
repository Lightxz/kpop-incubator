import React, { Component } from "react";
import logo from "../../images/kpop-logo.png";
import { Button } from "react-bootstrap";
import "./KpopEarned.css";
import NumberFormat from "react-number-format";
import Web3 from "web3";

class KpopEarned extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kpopEarned: 0,
    };
    this.claim = this.claim.bind(this);
  }

  async componentDidMount() {
    let _web3 = window.w3;
    let myContract = new _web3.eth.Contract(
      window.farming_abi,
      window.farming_address
    );
    let e = await myContract.methods.earned(window.account).call();
    let earned = Web3.utils.fromWei(e);
    this.setState({ kpopEarned: earned });
  }

  async claim() {
    let _web3 = window.w3;
    let myContract = new _web3.eth.Contract(
      window.farming_abi,
      window.farming_address
    );
    await myContract.methods.getReward().send({
      from: window.account,
    });
    await this.componentDidMount();
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-between">
          <p className="kpop-earned-label">KPOP Earned</p>
          <p className="mb-4 kpop-earned-label">BSC</p>
        </div>
        <div className="kpop-earned-container">
          <div className="kpop-earned-information-container">
            <div className="kpop-earned-information">
              <img className="earned-logo" src={logo} alt="logo" />
              <div className="kpop-earned-data-container">
                <p className="mb-0 kpop-token-earned">
                  <NumberFormat
                    value={this.state.kpopEarned}
                    decimalScale={4}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" KPOP"}
                  />
                </p>
                <small className="kpop-usd-earned">
                  <NumberFormat
                    value={this.state.kpopEarned * window.kpopUsdPrice}
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
            <Button className="claim-btn" onClick={this.claim}>
              Claim
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default KpopEarned;
