import React from "react";
import "./App.css";

import Header from "./components/Header";
import Weather from "./components/Weather";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Weather />
        <Map />
      </div>
    </div>
  );
}

export default App;
