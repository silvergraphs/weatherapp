import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Weather-logo" alt="logo" />
        <h1 style={{ marginTop: "0.3em", fontSize: "1.3em" }}>Weather App</h1>
        <hr
          color="white"
          width="131vmin"
          style={{ opacity: 0.3, marginBottom: "1.3em" }}
        ></hr>
        <strong style={{ fontSize: "2em" }}>23° C</strong>
        <p style={{ fontSize: "0.8em", paddingBottom: "1em" }}>London, GA</p>
        <div className="Weather-data">
          <div style={{ float: "left" }}>
            1009hPa
            <p style={{ fontSize: "0.4em" }}>PRESSURE</p>
          </div>
          <div style={{ float: "left", paddingLeft: "0.85em" }}>
            52%
            <p style={{ fontSize: "0.4em" }}>HUMIDITY</p>
          </div>
          <div style={{ float: "left", paddingLeft: "0.85em" }}>
            20° C<p style={{ fontSize: "0.4em" }}>MAX. TEMP</p>
          </div>
          <div style={{ float: "left", paddingLeft: "0.85em" }}>
            -20° C<p style={{ fontSize: "0.4em" }}>MIN. TEMP</p>
          </div>
        </div>
        [map]
      </header>
    </div>
  );
}

export default App;
