import React from "react";
import LocationForm from "./LocationForm";
import ForecastLists from "./ForecastLists";
import LocationLists from "./LocationLists";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <Header />
      <LocationForm />
      <LocationLists />
      <ForecastLists />
    </div>
  );
}
