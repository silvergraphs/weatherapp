import React from "react";

export default function Weather() {
  return (
    <>
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
    </>
  );
}
