import React from "react";
import "./Modal.css";

import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

// Icons
import { X } from "react-bootstrap-icons";

// Image
import logo from "../../images/kpop-logo.png";

function ModalComponent(props) {
  const MODAL_TYPE = { STAKE: "STAKE", UNSTAKE: "UNSTAKE" };
  const {
    isModalVisible,
    handleClose,
    modalType,
    pool_title,
    handleDeposit,
    amount,
    setAmount,
    handleWithdrawal,
    availableBalance,
    withdrawableBalance,
  } = props;
  const isModalTypeStake = modalType === MODAL_TYPE.STAKE;

  const handleCloseModal = () => {
    setAmount(0);
    handleClose();
  };

  const isDepositButtonDisabled =
    amount > availableBalance || amount === 0 || amount === "";

  const isWithdrawButtonDisabled =
    amount > withdrawableBalance || amount === 0 || amount === "";
  const modalActionButton = isModalTypeStake ? (
    <Button
      onClick={handleDeposit}
      className={`actionButton ${isDepositButtonDisabled && "button-disabled"}`}
      disabled={isDepositButtonDisabled}
    >
      Deposit
    </Button>
  ) : (
    <Button
      onClick={handleWithdrawal}
      className={`actionButton ${
        isWithdrawButtonDisabled && "button-disabled"
      }`}
      disabled={isWithdrawButtonDisabled}
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
      <X className="closeIconButton" onClick={handleCloseModal} />
      <h1 className="modalHeaderText">{modalHeader}</h1>

      <div className="lpStatusContainer">
        <p>Available</p>
        <div className="d-flex align-items-center">
          <img src={logo} alt="KPOP" className="lp-image" />
          <p className="flex1 m-0">{`${pool_title}`}</p>
          <p className="m-0">{`${
            isModalTypeStake
              ? Number(availableBalance).toFixed(5)
              : Number(withdrawableBalance).toFixed(5)
          } LP`}</p>
        </div>
      </div>

      <div className="lpInputContainer">
        <p>Amount</p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter amount here"
            onChange={handleChange}
            value={amount}
            className="modalInput"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() =>
              setAmount(
                isModalTypeStake ? availableBalance : withdrawableBalance
              )
            }
          >
            max
          </Button>
        </InputGroup>
        <p className="m-0 subText">{`Available max ${
          isModalTypeStake ? availableBalance : withdrawableBalance
        }`}</p>
      </div>
      {modalActionButton}
    </Modal>
  );
}

export default ModalComponent;
