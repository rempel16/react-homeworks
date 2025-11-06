import React, { useState } from "react";
import CitySelector from "./CitySelector";
import CityCard from "./CityCard";


export default function CityApp() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <h1>City Cards</h1>
      <CitySelector onSelectCity={setSelectedCity} />
      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
}
