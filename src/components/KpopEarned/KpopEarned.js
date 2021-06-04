import React, { Component } from 'react';
import logo from "../../images/kpop-logo.png";
import { Row, Col, Button } from "react-bootstrap";
import "./KpopEarned.css";
import NumberFormat from 'react-number-format';
import Web3 from 'web3';

class KpopEarned extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kpopEarned: 0
    }
    this.claim = this.claim.bind(this);
  }

  async componentDidMount(){
    let _web3 = window.w3;
    let myContract = new _web3.eth.Contract(window.farming_abi, window.farming_address);
    let e = (await myContract.methods.earned(window.account).call());
    let earned = Web3.utils.fromWei(e);
    this.setState({kpopEarned: earned});
  }

  async claim(){
    let _web3 = window.w3;
    let myContract = new _web3.eth.Contract(window.farming_abi, window.farming_address);
    await myContract.methods.getReward().send({
      from : window.account
    });
    await this.componentDidMount();
  }

  render() { 
    return (
      <div className="kpop-earned">
        <Row className="justify-content-between">
          <Col xs={6} sm={4}>
            <p className="kpop-earned-label">KPOP Earned</p>
            <Row className="d-flex align-items-center">
              <Col xs={5} sm={4} className="text-center">
                <img className="logo" src={logo} alt="logo" />
              </Col>
              <Col xs={5} sm={5} className="kpop-earned-bal">
                <p className="mb-0">
                  <NumberFormat value={this.state.kpopEarned} decimalScale={5} displayType={'text'} thousandSeparator={true} suffix={' KPOP'} />
                </p>
                <small>
                  <NumberFormat value={this.state.kpopEarned * window.kpopUsdPrice} decimalScale={4} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </small>
              </Col>
            </Row>
          </Col>

          <Col xs={6} sm={4} className="text-end">
            <p className="mb-4 kpop-earned-label">BSC</p>
            <Row className="d-flex align-items-center">
              <Col sm={11}>
                <Button className="claim-btn" onClick={this.claim} >Claim</Button>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
 
export default KpopEarned;