import React from "react";

export default function CityCard({ city }) {
  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} width="400" />
      <p>{city.description}</p>

      <h3>Интересные факты:</h3>
      <ul>
        {city.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
