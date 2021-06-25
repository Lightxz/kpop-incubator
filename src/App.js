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

window.KPOP_BUSD_FARMING_ADDRESS = "0x027c4B2b8516Ea7BD44EEA6bcfbEc405630C67cc";
window.KPOP_BUSD_SMART_CONTRACT = "0x9484201A78FBE9B75A145044d4a1b50d2d7A360F";

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
        // User denied account access...
        alert("You must connect your wallet !");
        this.setState({ isLoading: false });
        return;
      }
    } else {
      // you cant connect
      alert(
        "You have to use Trustwallet app or install Metamask extension in your browser to use this app, you can install it from :  https://metamask.io/download.html"
      );
      this.setState({ isLoading: false });
      return;
    }
    let web3 = new Web3(window.ethereum);

    // Check network id
    let chainId = await web3.eth.net.getId();
    if (chainId !== 56) {
      alert("Please switch your wallet to BSC");
      this.setState({ isLoading: false });
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
    let mytoken = new web3.eth.Contract(
      window.erc20_abi,
      window.KPOP_FAN_TOKEN_ADDRESS
    );
    let bnbPoolBalance = await wbnb.methods
      .balanceOf(window.KPOP_BNB_SMART_CONTRACT)
      .call();
    let tokenPoolBalance = await mytoken.methods
      .balanceOf(window.KPOP_BNB_SMART_CONTRACT)
      .call();
    let tokenBnbPrice = bnbPoolBalance / tokenPoolBalance;
    window.kpopUsdPrice = bnbPrice * tokenBnbPrice;

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
    
    window.BUSD_lptValue = (BUSD_poolBalance * 2) / BUSD_totalLPtSupply ;

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
    // -------------------------------

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
            <KpopStand handleOpenModal={this.handleOpenModal} />
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
      <div className="connectMessageContainer">Please Connect Your Wallet</div>
    );
  }
}
