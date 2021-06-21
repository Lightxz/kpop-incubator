import React, { useState } from "react";
import "./DepositedCard.css";
import { Col, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Modal from "../Modal/Modal";

const DepositedCard = (props) => {
  const MODAL_TYPE = { STAKE: "STAKE", UNSTAKE: "UNSTAKE" };
  const { lpDeposited, isComingSoon, mainImage, secondaryImage, title } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(MODAL_TYPE.STAKE);

  const handleOpenModal = (modalType) => {
    setIsModalOpen(true);
    setModalType(modalType);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Col style={{ position: "relative" }}>
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
                    value={lpDeposited}
                    decimalScale={4}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={` ${title}`}
                  />
                </p>
                <small className="subHeader">
                  <NumberFormat
                    value={lpDeposited * window.lptValue}
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
      />
    </Col>
  );
};

export default DepositedCard;
