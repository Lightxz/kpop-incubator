import React, { Component } from "react";
import "./KpopEarned.css";
import Web3 from "web3";
import EarnedCard from "../EarnedCard/EarnedCard";
import Loading from "../Loading/Loading";

class KpopEarned extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalEarned: 0,
      isLoading: false,
    };
    this.claim = this.claim.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    let _web3 = window.w3;

    // KPOP/BNB
    let myContract = new _web3.eth.Contract(
      window.farming_abi,
      window.KPOP_BNB_FARMING_ADDRESS
    );
    let e = await myContract.methods.earned(window.account).call();
    let BNB_earned = Web3.utils.fromWei(e);

    // KPOP.BUSD
    let BUSD_myContract = new _web3.eth.Contract(
      window.farming_abi,
      window.KPOP_BUSD_FARMING_ADDRESS
    );
    let BUSD_e = await BUSD_myContract.methods.earned(window.account).call();
    let BUSD_earned = Web3.utils.fromWei(BUSD_e);
    
    
    this.setState({
      isLoading: false,
      totalEarned: Number(BUSD_earned) + Number(BNB_earned)
    });
  }

  async claim() {
    this.setState({ isLoading: true });
    let _web3 = window.w3;

    // KPOP/BNB
    let myContract = new _web3.eth.Contract(
      window.farming_abi,
      window.KPOP_BNB_FARMING_ADDRESS
    );
    await myContract.methods.getReward().send({
      from: window.account,
    });

    // KPOP/BUSD
    let BUSD_myContract = new _web3.eth.Contract(
      window.farming_abi,
      window.KPOP_BUSD_FARMING_ADDRESS
    );

    await BUSD_myContract.methods.getReward().send({
      from: window.account,
    });

    await this.componentDidMount();
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loading />}
        <div className="d-flex justify-content-between">
          <p className="kpop-earned-label">KPOP Earned</p>
          <p className="mb-4 kpop-earned-label">BSC</p>
        </div>
        <EarnedCard
          kpopEarned={this.state.totalEarned}
          handleClaim={this.claim}
        />
      </>
    );
  }
}

export default KpopEarned;
