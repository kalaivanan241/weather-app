import React, { Component } from "react";
import LocationForm from "./LocationForm";
import ForecastLists from "./ForecastLists";
import LocationLists from "./LocationLists";

export default function App() {
  return (
    <div>
      <LocationForm />
      <LocationLists />
      <ForecastLists />
    </div>
  );
}
