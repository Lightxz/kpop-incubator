import React, { useState } from "react";
import "./Modal.css";
import Web3 from "web3";

import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

// Component
import Loading from "../Loading/Loading";

// Icons
import { X } from "react-bootstrap-icons";

// Image
import logo from "../../images/kpop-logo.png";

function ModalComponent(props) {
  const MODAL_TYPE = { STAKE: "STAKE", UNSTAKE: "UNSTAKE" };
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { isModalVisible, handleClose, modalType, pool_title } = props;
  const isModalTypeStake = modalType === MODAL_TYPE.STAKE;

  const _web3 = window.w3;
  const myContract = new _web3.eth.Contract(
    window.farming_abi,
    window.KPOP_BNB_FARMING_ADDRESS
  );

  const handleReset = () => {
    setAmount(0);
  };

  const handleCloseModal = () => {
    setIsLoading(false);
    handleClose();
    handleReset();
  };

  const handleWithdrawal = async () => {
    setIsLoading(true);

    await myContract.methods.unstake(Web3.utils.toWei(amount.toString())).send({
      from: window.account,
    });

    handleCloseModal();
    window.location.reload();
  };

  const handleDeposit = async () => {
    setIsLoading(true);

    let myToken = new _web3.eth.Contract(
      window.erc20_abi,
      window.KPOP_BNB_SMART_CONTRACT
    );

    let approvedAmount = await myToken.methods
      .allowance(window.account, window.KPOP_BNB_FARMING_ADDRESS)
      .call();
    approvedAmount = Web3.utils.fromWei(approvedAmount);

    if (approvedAmount < amount) {
      await myToken.methods
        .approve(
          window.KPOP_BNB_FARMING_ADDRESS,
          Web3.utils.toWei("1000000000000000000")
        )
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

  const isButtonDisabled =
    amount > (isModalTypeStake ? window.lpBalance : window.depositedLp);

  const modalActionButton = isModalTypeStake ? (
    <Button
      onClick={handleDeposit}
      className={`actionButton ${
        (isButtonDisabled || window.lpBalance == 0) && "button-disabled"
      }`}
      disabled={isButtonDisabled || window.lpBalance == 0}
    >
      Deposit
    </Button>
  ) : (
    <Button
      onClick={handleWithdrawal}
      className={`actionButton ${isButtonDisabled && "button-disabled"}`}
      disabled={isButtonDisabled}
    >
      Withdraw
    </Button>
  );

  const modalHeader = isModalTypeStake ? "Stake your LP" : "Unstake your LP";

  const convertStringToInt = (numString) => {
    const restrictedCharactersRegex = /[,$]/g;
    const sanitizedString = numString
      .toString()
      .replaceAll(restrictedCharactersRegex, "");

    let convertedValue = parseInt(sanitizedString);
    return isNaN(convertedValue) ? "" : convertedValue;
  };

  const handleChange = (e) => {
    const newAmountValue = convertStringToInt(e.target.value);
    setAmount(newAmountValue);
  };

  return (
    <Modal
      show={isModalVisible}
      onHide={handleCloseModal}
      keyboard={false}
      centered
      contentClassName="modalContainer"
    >
      {isLoading && <Loading />}
      <X className="closeIconButton" onClick={handleCloseModal} />
      <h1 className="modalHeaderText">{modalHeader}</h1>

      <div className="lpStatusContainer">
        <p>Available</p>
        <div className="d-flex align-items-center">
          <img src={logo} alt="KPOP" className="lp-image" />
          <p className="flex1 m-0">{`${pool_title}`}</p>
          <p className="m-0">{`${
            isModalTypeStake
              ? Number(window.lpBalance).toFixed(5)
              : Number(window.depositedLp).toFixed(5)
          } LP`}</p>
        </div>
      </div>

      <div className="lpInputContainer">
        <p>Amount</p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Amount"
            onChange={handleChange}
            value={amount}
            className="modalInput"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() =>
              setAmount(
                isModalTypeStake ? window.lpBalance : window.depositedLp
              )
            }
          >
            max
          </Button>
        </InputGroup>
        <p className="m-0 subText">{`Available max ${
          isModalTypeStake ? window.lpBalance : window.depositedLp
        }`}</p>
      </div>
      {modalActionButton}
    </Modal>
  );
}

export default ModalComponent;
