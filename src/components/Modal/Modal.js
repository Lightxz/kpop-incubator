import React, { useState } from "react";
import "./Modal.css";

import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

// Icons
import { X } from "react-bootstrap-icons";

// Image
import logo from "../../images/kpop-logo.png";

function ModalComponent(props) {
  const [amount, setAmount] = useState(0);
  const [maxAvailable, setMaxAvailable] = useState(1000);
  const { isModalVisible, handleClose, modalType } = props;

  const handleReset = () => {
    setAmount(0);
    setMaxAvailable(1000);
  };

  const handleCloseModal = () => {
    handleClose();
    handleReset();
  };

  const handleWithdrawal = () => {
    alert("handle withdrawal here");
    handleCloseModal();
  };

  const handleDeposit = () => {
    alert("handle deposit here");
    handleCloseModal();
  };

  const isButtonDisabled = amount > maxAvailable;

  const modalActionButton =
    modalType === "STAKE" ? (
      <Button
        onClick={handleDeposit}
        className={`actionButton ${isButtonDisabled && "button-disabled"}`}
        disabled={isButtonDisabled}
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

  const modalHeader =
    modalType === "STAKE" ? "Stake your LP" : "Unstake your LP";

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
          <p className="flex1 m-0">BNB/KPOP LP</p>
          <p className="m-0">{`${maxAvailable} LP`}</p>
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
            onClick={() => setAmount(maxAvailable)}
          >
            max
          </Button>
        </InputGroup>
        <p className="m-0 subText">{`Available max ${maxAvailable}`}</p>
      </div>
      {modalActionButton}
    </Modal>
  );
}

export default ModalComponent;
