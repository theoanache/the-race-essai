import React, { useState } from "react";
import "./ThrowDice.css";
import De from "./De";
import Score from "./Score.jsx";

function App() {

  const [resultA, setresultA] = useState(4);
  const [resultB, setresultB] = useState(3);
  const [newScore, setNewScore] = useState([]);

  const handleClick= () => {

    let newResultA = Math.floor((Math.random() * 6) + 1)
    let newResultB = Math.floor((Math.random() * 6) + 1)

    if (resultA > 6) {
      setresultA(resultA - 6);
    }
    if (newResultA === resultA) {
      setresultA(newResultA + 6)
    } else {
      setresultA(newResultA);
    }
    if (resultB > 6) {
      setresultB(resultB - 6);
    }
    if (newResultB === resultB) {
      setresultB(newResultB + 6)
    } else {
      setresultB(newResultB);
    }
    setNewScore([...newScore, newResultA + '' + newResultB ])
  }

  // const getSetTimeOut = () => {
  //   setTimeout(() => setScore(resultA + '' + resultB), 1200);
  // }
  
  // useEffect(()=> {
  //   getSetTimeOut();
  // }, [])


  return (
    <div>
      <div className="containerTest">
        <button type="button" className="button" onClick={handleClick}>LANCER !</button>
        <div className="dices">
          <De id={1} result={resultA}/>
          <De id={2} result={resultB}/>
        </div>
        <div className="score">
          {newScore.map((number, index) => (
            <div key={index}>
              <Score id={index +1} number={number} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
