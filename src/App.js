import React from "react";
import Map from "./components/map/Map";
import ThrowDice from "./components/Dice/ThrowDice";
import "./App.css";
function App() {


  return (
      <div className="home">
        <Map />
        <ThrowDice />
      </div>
  );
}

export default App;
