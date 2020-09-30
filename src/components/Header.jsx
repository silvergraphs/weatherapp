import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <>
      <img src={logo} className="Weather-logo" alt="logo" />
      <h1 style={{ marginTop: "0.3em", fontSize: "1.3em" }}>Weather App</h1>
      <hr
        color="white"
        width="131vmin"
        style={{ opacity: 0.3, marginBottom: "1.3em" }}
      ></hr>
    </>
  );
}
