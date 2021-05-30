import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./layouts/Landing/Landing";
import KpopStand from "./layouts/KpopStand/KpopStand";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <KpopStand />
      <Footer />
    </div>
  );
}

export default App;
