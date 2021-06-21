import React, { Component } from "react";
import "./KpopEarned.css";
import Web3 from "web3";
import EarnedCard from "../EarnedCard/EarnedCard";

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
        <EarnedCard
          kpopEarned={this.state.kpopEarned || "21343434.234234"}
          handleClaim={this.claim}
        />
      </>
    );
  }
}

export default KpopEarned;
