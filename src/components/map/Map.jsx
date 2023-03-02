import React, { useState } from "react";
import "./Map.css";
import CarYellow from "../../assets/car/car_yellow.png";
import MapIso from "../../assets/map/map_iso.png";


const Map = () => {
  const [moveCar, setMoveCar] = useState(false);

  const Back = () => {
    setMoveCar(false)
  };
  
  const Advance = () => {
    setMoveCar(true)
  };

  return (
    <div className="containerBoard">
        <div className="board">
            <img className="mapIso" src={MapIso} alt='map' />
        </div>
        <div className="containerCar">
          <img className={moveCar ? "car" : "car2"} src={CarYellow} alt="Car" />
        </div>
      <div className="buttons">
        <button type="button" onClick={Back} >-1</button>
        <button type="button" onClick={Advance}> +1 </button>
      </div>
    </div>
  );
};

export default Map;
