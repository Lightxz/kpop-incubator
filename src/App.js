import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./layouts/Landing/Landing";
import KpopStand from "./layouts/KpopStand/KpopStand";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <KpopStand />
    </div>
  );
}

export default App;
