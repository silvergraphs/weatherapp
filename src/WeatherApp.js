import React, { useState, useEffect } from "react";
import "./App.css";

import credentials from "./credentials"; // Credentials data

import Header from "./components/Header";
import Weather from "./components/Weather";
import Map from "./components/Map";

function App() {
  // State of the component where i save the data
  const [apiData, setApiData] = useState(null);

  // When the component is mounted, updates the status fetching all data
  useEffect(() => {
    const fetchData = async () => {
      const city = "London";
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${credentials.appId}`;
      const data = await fetch(apiUrl);
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
        <Map
          style={{ margin: `2em` }}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.googleApiKey}`}
          loadingElement={<div>Loading map</div>}
          containerElement={
            <div
              style={{
                width: `400px`,
                height: `400px`,
                padding: `0.7em 1em 1em 1em`,
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
          coords={apiData}
        />
      </div>
    </div>
  );
}

export default App;
