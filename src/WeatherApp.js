import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Weather from "./components/Weather";
/* import Map from "./components/Map"; */

function App() {
  // State of the component where i save the data
  const [apiData, setApiData] = useState(null);

  // When the component is mounted, updates the status fetching all data
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=996cbb1d5e875cb5b95daac84a9f1f55"
      );
      const convertedData = await data.json();
      setApiData(convertedData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Weather data={apiData} />
        {/* <Map /> */}
      </div>
    </div>
  );
}

export default App;
