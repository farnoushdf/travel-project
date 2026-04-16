import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">FnDF Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for FnDF Travelers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList />
    </>
  );
}

export default App;
