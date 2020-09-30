import React from "react";

export default function Weather(props) {
  if (props.data) {
    const { name, sys, main } = props.data;
    return (
      <>
        <strong style={{ fontSize: "2em" }}>{Math.round(main.temp)}° C</strong>
        <p style={{ fontSize: "0.8em", paddingBottom: "1em" }}>
          {name}, {sys.country}
        </p>
        <div className="Weather-data">
          <div style={{ float: "left" }}>
            {main.pressure}hPa
            <p style={{ fontSize: "0.4em" }}>PRESSURE</p>
          </div>
          <div style={{ float: "left", paddingLeft: "0.85em" }}>
            {main.humidity}%<p style={{ fontSize: "0.4em" }}>HUMIDITY</p>
          </div>
          <div style={{ float: "left", paddingLeft: "0.85em" }}>
            {main.temp_max}° C<p style={{ fontSize: "0.4em" }}>MAX. TEMP</p>
          </div>
          <div style={{ float: "left", paddingLeft: "0.85em" }}>
            {main.temp_min}° C<p style={{ fontSize: "0.4em" }}>MIN. TEMP</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <svg
          className="circle-loader progress"
          width="40"
          height="40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="15"></circle>
        </svg>
      </div>
    );
  }
}
