import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hasAts, setHasAts] = useState(false);
  const [hasEts, setHasEts] = useState(false);

  const [atsTraffic, setAtsTraffic] = useState(1);
  const [atsPedestrian, setAtsPedestrian] = useState(1);
  const [etsTraffic, setEtsTraffic] = useState(1);
  const [etsPedestrian, setEtsPedestrian] = useState(1);

  const resetAts = () => {
    setAtsTraffic(5);
    setAtsPedestrian(5);
  };

  const resetEts = () => {
    setEtsTraffic(5);
    setEtsPedestrian(5);
  };

  useEffect(() => {
    window.api.checkConfig((result) => {
      setHasAts(result.ats);
      setHasEts(result.ets);
    });
  }, []);

  return (
    <div className="appContainer">
      <nav>🚚 ETS2 Traffic Density Changer 🚚</nav>

      <div className="gameContainer">
        {!hasAts && <div className="disabled"></div>}
        <h2>American Truck Simulator</h2>

        <label htmlFor="atstraffic">
          Traffic: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <span>{atsTraffic}</span>/10
        </label>
        <input
          type="range"
          id="atstraffic"
          min={0}
          max={10}
          step={1}
          value={atsTraffic}
          onChange={(e) => setAtsTraffic(Number(e.target.value))}
        />

        <label htmlFor="atspedestrian">
          Pedestrian:&nbsp;&nbsp; <span>{atsPedestrian}</span>/10
        </label>
        <input
          type="range"
          id="atspedestrian"
          min={0}
          max={10}
          step={1}
          value={atsPedestrian}
          onChange={(e) => setAtsPedestrian(Number(e.target.value))}
        />

        <button onClick={resetAts}>RESET</button>
      </div>

      <div className="gameContainer">
        {!hasEts && <div className="disabled"></div>}
        <h2>Euro Truck Simulator 2</h2>

        <label htmlFor="etstraffic">
          Traffic: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <span>{etsTraffic}</span>/10
        </label>
        <input
          type="range"
          id="etstraffic"
          min={0}
          max={10}
          step={1}
          value={etsTraffic}
          onChange={(e) => setEtsTraffic(Number(e.target.value))}
        />

        <label htmlFor="etspedestrian">
          Pedestrian:&nbsp;&nbsp; <span>{etsPedestrian}</span>/10
        </label>
        <input
          type="range"
          id="etspedestrian"
          min={0}
          max={10}
          step={1}
          value={etsPedestrian}
          onChange={(e) => setEtsPedestrian(Number(e.target.value))}
        />

        <button onClick={resetEts}>RESET</button>
      </div>
    </div>
  );
}

export default App;
