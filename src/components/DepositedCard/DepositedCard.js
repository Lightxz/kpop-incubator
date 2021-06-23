import React, { useState } from "react";
import "./DepositedCard.css";
import { Col, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Modal from "../Modal/Modal";
import Web3 from "web3";

// Component
import Loading from "../Loading/Loading";

const DepositedCard = (props) => {
  const MODAL_TYPE = { STAKE: "STAKE", UNSTAKE: "UNSTAKE" };
  const {
    smart_contract,
    farming_address,
    availableBalance,
    withdrawableBalance,
    isComingSoon,
    mainImage,
    secondaryImage,
    title,
    lptValue,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(MODAL_TYPE.STAKE);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  const _web3 = window.w3;
  const myContract = new _web3.eth.Contract(
    window.farming_abi,
    farming_address
  );

  const handleOpenModal = (modalType) => {
    setIsModalOpen(true);
    setModalType(modalType);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoading(false);
  };

  const handleDeposit = async () => {
    setIsLoading(true);

    let myToken = new _web3.eth.Contract(window.erc20_abi, smart_contract);

    let approvedAmount = await myToken.methods
      .allowance(window.account, farming_address)
      .call();
    approvedAmount = Web3.utils.fromWei(approvedAmount);

    if (approvedAmount < amount) {
      await myToken.methods
        .approve(farming_address, Web3.utils.toWei("1000000000000000000"))
        .send({
          from: window.account,
        });
    }

    await myContract.methods.stake(Web3.utils.toWei(amount.toString())).send({
      from: window.account,
    });

    handleCloseModal();
    window.location.reload();
  };

  const handleWithdrawal = async () => {
    setIsLoading(true);

    await myContract.methods.unstake(Web3.utils.toWei(amount.toString())).send({
      from: window.account,
    });

    handleCloseModal();
    window.location.reload();
  };

  return (
    <Col style={{ position: "relative" }}>
      {isLoading && <Loading />}

      {isComingSoon && (
        <div className="coming-soon-overlay">
          <h1>Coming soon</h1>
        </div>
      )}

      <div className={`card-item ${isComingSoon && "blurred-bg"}`}>
        <p>LP Deposited</p>
        <div className="d-flex deposited-container">
          <div className="deposited-information">
            <div className="logo-container">
              <img src={mainImage} alt={title} className="mainLogo" />
              <img src={secondaryImage} className="subLogo" alt={title} />
            </div>
            <div>
              <div className="deposited-text-container">
                <p className="header">
                  <NumberFormat
                    value={withdrawableBalance}
                    decimalScale={4}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={` ${title}`}
                  />
                </p>
                <small className="subHeader">
                  <NumberFormat
                    value={withdrawableBalance * lptValue}
                    decimalScale={4}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </small>
              </div>
            </div>
          </div>

          <div className="deposited-btn-container">
            <Button
              className="deposited-btn"
              onClick={() => handleOpenModal(MODAL_TYPE.STAKE)}
            >
              Stake
            </Button>
            <Button
              className="deposited-btn"
              onClick={() => handleOpenModal(MODAL_TYPE.UNSTAKE)}
            >
              Unstake
            </Button>
          </div>
        </div>
      </div>

      {/* Stake and Unstake modal */}
      <Modal
        isModalVisible={isModalOpen}
        handleClose={handleCloseModal}
        modalType={modalType}
        pool_title={title}
        handleDeposit={handleDeposit}
        handleWithdrawal={handleWithdrawal}
        amount={amount}
        setAmount={setAmount}
        availableBalance={availableBalance}
        withdrawableBalance={withdrawableBalance}
      />
    </Col>
  );
};

export default DepositedCard;
