import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./layouts/Landing/Landing";
import KpopStand from "./layouts/KpopStand/KpopStand";
import ActivePools from "./components/ActivePools/ActivePools";
import Footer from "./components/Footer/Footer";

function App() {
  const handleConnect = () => {
    alert("Handle Connect");
  };
  return (
    <div className="App">
      <Navbar handleConnect={handleConnect} />
      <Landing />
      <KpopStand />
      <ActivePools />
      <Footer />
    </div>
  );
}

export default App;
