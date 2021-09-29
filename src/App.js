import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./layouts/Landing/Landing";
import KpopStand from "./layouts/KpopStand/KpopStand";
import ActivePools from "./components/ActivePools/ActivePools";
import Footer from "./components/Footer/Footer";
import Web3 from "web3";
import Loading from "./components/Loading/Loading";

window.erc20_abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
];
const wbnb_address = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const busd_address = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
const CAKE_address = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";
const KPOP_address = "0x3Ba2b1C2c46200e826C56550ff7a2b29bad10F3d";
const KFAN_address = "0x8efef94ea1b04aa02814f0f5c7a7389dabdb6d6a";

window.farming_abi = [
  {
    inputs: [
      { internalType: "address", name: "_rewardsToken", type: "address" },
      { internalType: "address", name: "_stakingToken", type: "address" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "RewardsDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "reward", type: "uint256" }],
    name: "changeRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "earned",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "exit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getRewardForDuration",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lastUpdateTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "periodFinish",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rewardPerToken",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rewardRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "rewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rewardsDuration",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rewardsToken",
    outputs: [{ internalType: "contract Ibep20", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "_rewardsDuration", type: "uint256" },
    ],
    name: "setRewardsDuration",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "stake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "stakingToken",
    outputs: [{ internalType: "contract Ibep20", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "startFarmingTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "unstake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userRewardPerTokenPaid",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

window.KPOP_BNB_FARMING_ADDRESS = "0xF9C6b9a271fbf2997D03490437614E5253c65BF6";
window.KPOP_BNB_SMART_CONTRACT = "0x83ca76bdc2e454e362826c25b8f4abd0791bb594";
window.KPOP_FAN_TOKEN_ADDRESS = "0x3Ba2b1C2c46200e826C56550ff7a2b29bad10F3d";
window.BND_BUSD_LP_ADDRESS = "0x1B96B92314C44b159149f7E0303511fB2Fc4774f";
window.CAKE_BUSD_LP_ADDRESS = "0x804678fa97d91b974ec2af3c843270886528a9e6";

window.KPOP_BUSD_FARMING_ADDRESS = "0x57210518a135b2cd2E68d11A72B111231457bd93";
window.KPOP_BUSD_SMART_CONTRACT = "0xf92CD926350199501026ff3a4Ae96EbfFf5Bf4Ad";

window.KPOP_CAKE_FARMING_ADDRESS = "0x47E03D4D62132A7E772Fe9cAbE41dF825550821a";
window.KPOP_CAKE_SMART_CONTRACT = "0xb866B850c2e7Aac728267db76bF87F8cE382b382";

window.KPOP_FARMING_ADDRESS = "0x415685EB61F480C017b9EA9499a8fd104CB679f5";
window.KPOP_SMART_CONTRACT = "0x3Ba2b1C2c46200e826C56550ff7a2b29bad10F3d";

window.KFAN_FARMING_ADDRESS = "0xE97135D7a4bCA8fEAaE572A4241082F6196C05A0";
window.KFAN_SMART_CONTRACT = "0x8efef94ea1b04aa02814f0f5c7a7389dabdb6d6a";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletConnected: false,
      isLoading: true,
    };
    this.handleConnect = this.handleConnect.bind(this);
  }

  async handleConnect() {
    this.setState({ isLoading: true });
    // Modern Browsers like Chrome and Brave
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        this.setState({ isLoading: false });
        // User denied account access...
        alert(
          "You have to use Trustwallet app or install Metamask extension in your browser to use this app, you can install it from :  https://metamask.io/download.html"
        );

        return;
      }
    } else {
      this.setState({ isLoading: false });
      // you cant connect
      alert(
        "You have to use Trustwallet app or install Metamask extension in your browser to use this app, you can install it from :  https://metamask.io/download.html"
      );

      return;
    }
    let web3 = new Web3(window.ethereum);

    // Check network id
    let chainId = await web3.eth.net.getId();
    if (chainId !== 56) {
      this.setState({ isLoading: false });
      alert("Please switch your wallet to BSC");
      return;
    }

    // Set default account
    let accounts = await web3.eth.getAccounts();
    window.account = accounts[0];

    window.w3 = web3;

    // get bnb price:
    let wbnb = new web3.eth.Contract(window.erc20_abi, wbnb_address);
    let busd = new web3.eth.Contract(window.erc20_abi, busd_address);
    let bnbBalance = await wbnb.methods
      .balanceOf(window.BND_BUSD_LP_ADDRESS)
      .call();
    let busdBalance = await busd.methods
      .balanceOf(window.BND_BUSD_LP_ADDRESS)
      .call();

    let bnbPrice = busdBalance / bnbBalance;

    // get kpop price in bnb:
    // let mytoken = new web3.eth.Contract(
    //   window.erc20_abi,
    //   window.KPOP_FAN_TOKEN_ADDRESS
    // );
    let bnbPoolBalance = await wbnb.methods
      .balanceOf(window.KPOP_BNB_SMART_CONTRACT)
      .call();
    // let tokenPoolBalance = await mytoken.methods
    //   .balanceOf(window.KPOP_BNB_SMART_CONTRACT)
    //   .call();
    // let tokenBnbPrice = bnbPoolBalance / tokenPoolBalance;
    // window.kpopUsdPrice = bnbPrice * tokenBnbPrice;

    let KFAN = new web3.eth.Contract(window.erc20_abi, KFAN_address);

    let KFAN_poolBalance = await KFAN.methods
      .balanceOf(window.KFAN_SMART_CONTRACT)
      .call();

    let KFAN_busdPoolBalance = await busd.methods
      .balanceOf(window.KPOP_BUSD_SMART_CONTRACT)
      .call();
    let KFAN_tokenPoolBalance = await KFAN.methods
      .balanceOf(window.KPOP_BUSD_SMART_CONTRACT)
      .call();
    let kfanPriceInBusd =
      Number(KFAN_busdPoolBalance) / Number(KFAN_tokenPoolBalance);

    window.kfanUsdPrice = kfanPriceInBusd;
    window.kpopUsdPrice = kfanPriceInBusd;

    // Calculate Lp token value:
    let lpToken = new web3.eth.Contract(
      window.erc20_abi,
      window.KPOP_BNB_SMART_CONTRACT
    );
    let totalLPtSupply = await lpToken.methods.totalSupply().call();
    window.lptValue = ((bnbPoolBalance * 2) / totalLPtSupply) * bnbPrice;

    // Get lp token balance:
    let myBalance = await lpToken.methods.balanceOf(window.account).call();
    window.lpBalance = Web3.utils.fromWei(myBalance);

    // Get deposited lp tokens:
    let myContract = new web3.eth.Contract(
      window.farming_abi,
      window.KPOP_BNB_FARMING_ADDRESS
    );
    let d = await myContract.methods.balanceOf(window.account).call();
    let deposited = Web3.utils.fromWei(d);
    window.depositedLp = deposited;

    // --------- KPOP/BUSD -----------

    let BUSD_poolBalance = await busd.methods
      .balanceOf(window.KPOP_BUSD_SMART_CONTRACT)
      .call();

    // Calculate Lp token value:
    let BUSD_lpToken = new web3.eth.Contract(
      window.erc20_abi,
      window.KPOP_BUSD_SMART_CONTRACT
    );
    let BUSD_totalLPtSupply = await BUSD_lpToken.methods.totalSupply().call();

    window.BUSD_lptValue = (BUSD_poolBalance * 2) / BUSD_totalLPtSupply;

    // Get lp token balance:
    let BUSD_myBalance = await BUSD_lpToken.methods
      .balanceOf(window.account)
      .call();
    window.BUSD_lpBalance = Web3.utils.fromWei(BUSD_myBalance);

    // Get deposited lp tokens:
    let BUSD_myContract = new web3.eth.Contract(
      window.farming_abi,
      window.KPOP_BUSD_FARMING_ADDRESS
    );
    let BUSD_d = await BUSD_myContract.methods.balanceOf(window.account).call();
    let BUSD_deposited = Web3.utils.fromWei(BUSD_d);
    window.BUSD_depositedLp = BUSD_deposited;

    // --------- KPOP SINGLE STAKING -----------
    let KPOP = new web3.eth.Contract(window.erc20_abi, KPOP_address);

    let KPOP_poolBalance = await KPOP.methods
      .balanceOf(window.KPOP_SMART_CONTRACT)
      .call();

    // Calculate Lp token value:
    let KPOP_lpToken = new web3.eth.Contract(
      window.erc20_abi,
      window.KPOP_SMART_CONTRACT
    );
    let KPOP_totalLPtSupply = await KPOP_lpToken.methods.totalSupply().call();

    window.KPOP_lptValue =
      ((KPOP_poolBalance * 2) / KPOP_totalLPtSupply) * window.kpopUsdPrice;

    // Get lp token balance:
    let KPOP_myBalance = await KPOP_lpToken.methods
      .balanceOf(window.account)
      .call();
    window.KPOP_lpBalance = Web3.utils.fromWei(KPOP_myBalance);

    // Get deposited lp tokens:
    let KPOP_myContract = new web3.eth.Contract(
      window.farming_abi,
      window.KPOP_FARMING_ADDRESS
    );
    let KPOP_d = await KPOP_myContract.methods.balanceOf(window.account).call();
    let KPOP_deposited = Web3.utils.fromWei(KPOP_d);
    window.KPOP_depositedLp = KPOP_deposited;

    // --------- KFAN SINGLE STAKING -----------

    // Calculate Lp token value:
    let KFAN_lpToken = new web3.eth.Contract(
      window.erc20_abi,
      window.KFAN_SMART_CONTRACT
    );
    let KFAN_totalLPtSupply = await KFAN_lpToken.methods.totalSupply().call();

    window.KFAN_lptValue =
      ((KFAN_poolBalance * 2) / KFAN_totalLPtSupply) * window.kfanUsdPrice;

    // Get lp token balance:
    let KFAN_myBalance = await KFAN_lpToken.methods
      .balanceOf(window.account)
      .call();
    window.KFAN_lpBalance = Web3.utils.fromWei(KFAN_myBalance);

    // Get deposited lp tokens:
    let KFAN_myContract = new web3.eth.Contract(
      window.farming_abi,
      window.KFAN_FARMING_ADDRESS
    );
    let KFAN_d = await KFAN_myContract.methods.balanceOf(window.account).call();
    let KFAN_deposited = Web3.utils.fromWei(KFAN_d);
    window.KFAN_depositedLp = KFAN_deposited;

    this.setState({ walletConnected: true, isLoading: false });
  }

  handleCloseModal() {
    this.setState({ isModalVisible: false });
  }

  handleOpenModal(newModalType) {
    this.setState({ isModalVisible: true, modalType: newModalType });
  }

  async componentDidMount() {
    await this.handleConnect();
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
    } else {
      document.documentElement.style.overflow = "scroll";
      document.body.scroll = "yes";
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading && <Loading />}
        {/* {false && <Loading />} */}
        <Navbar
          handleConnect={this.handleConnect}
          isWalletConnected={this.state.walletConnected}
        />
        <Landing />
        {!this.state.walletConnected ? (
          // {false ? (
          <ConnectYourWallet />
        ) : (
          <div>
            <KpopStand />
            <ActivePools />
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export default App;

class ConnectYourWallet extends Component {
  render() {
    return (
      <div className="connectMessageContainer">
        Please connect your wallet to join active{" "}
        <strong className="textEmphasize">KFAN Pools</strong>
      </div>
    );
  }
}
