import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./layouts/Landing/Landing";
import KpopStand from "./layouts/KpopStand/KpopStand";
import ActivePools from "./components/ActivePools/ActivePools";
import Footer from "./components/Footer/Footer";

// Components
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [modalType, setModalType] = useState("STAKE");
  const handleConnect = () => {
    alert("Handle Connect");
  };

  const handleCloseModal = () => {
    setModalVisibility(false);
  };

  const handleOpenModal = (newModalType) => {
    setModalVisibility(true);
    setModalType(newModalType);
  };

  return (
    <div className="App">
      <Navbar handleConnect={handleConnect} />
      <Landing />
      <KpopStand handleOpenModal={handleOpenModal} />
      <ActivePools />
      <Footer />

      <Modal
        isModalVisible={isModalVisible}
        handleClose={handleCloseModal}
        modalType={modalType}
      />
    </div>
  );
}

export default App;
