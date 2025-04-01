import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hasAts, setHasAts] = useState(false);
  const [hasEts, setHasEts] = useState(false);

  const [atsTraffic, setAtsTraffic] = useState(1);
  const [atsPedestrian, setAtsPedestrian] = useState(1);
  const [etsTraffic, setEtsTraffic] = useState(1);
  const [etsPedestrian, setEtsPedestrian] = useState(1);

  useEffect(() => {
    window.api.checkConfig((result) => {
      setHasAts(result.ats);
      setHasEts(result.ets);
    });

    if (hasAts) {
      window.api.readAtsValuesFromConfig((result) => {
        setAtsTraffic(result.traffic);
        setAtsPedestrian(result.pedestrian);
      });
    }

    if (hasEts) {
      window.api.readEtsValuesFromConfig((result) => {
        setEtsTraffic(result.traffic);
        setEtsPedestrian(result.pedestrian);
      });
    }
  }, [hasAts, hasEts]);

  const handelSaveAts = () => {
    window.api.setAtsValues({ traffic: atsTraffic, pedestrian: atsPedestrian });
  };

  const handelSaveEts = () => {
    window.api.setEtsValues({ traffic: etsTraffic, pedestrian: etsPedestrian });
  };

  const handelResetAts = () => {
    setAtsTraffic(1);
    setAtsPedestrian(1);
    window.api.setAtsValues({ traffic: 1, pedestrian: 1 });
  };

  const handelResetEts = () => {
    setEtsTraffic(1);
    setEtsPedestrian(1);
    window.api.setEtsValues({ traffic: 1, pedestrian: 1 });
  };

  return (
    <div className="appContainer">
      <nav>🚚 ETS2 Traffic Density Changer 🚚</nav>

      <div className="gameContainer">
        {!hasAts && <div className="disabled"></div>}
        <h2>American Truck Simulator</h2>

        <label htmlFor="atstraffic">
          Traffic:
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
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
          Pedestrian:&nbsp;&nbsp;&nbsp;&nbsp; <span>{atsPedestrian}</span>/10
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

        <div className="btnBox">
          <button onClick={handelSaveAts}>SAVE</button>
          <button onClick={handelResetAts}>RESET</button>
        </div>
      </div>

      <div className="gameContainer">
        {!hasEts && <div className="disabled"></div>}
        <h2>Euro Truck Simulator 2</h2>

        <label htmlFor="etstraffic">
          Traffic:
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
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
          Pedestrian:&nbsp;&nbsp;&nbsp;&nbsp; <span>{etsPedestrian}</span>/10
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

        <div className="btnBox">
          <button onClick={handelSaveEts}>SAVE</button>
          <button onClick={handelResetEts}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
