import React from "react";

const citiesData = [
  {
    name: "Токио",
    description:
      "Столица Японии, известная неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Самый населенный мегаполис в мире.",
      "Здесь находится самая высокая башня Японии.",
      "Город полон фестивалей и событий.",
    ],
  },
  {
    name: "Киото",
    description: "Город с храмами, садами, дворцами и деревянными домами.",
    imageUrl:
      "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663423488_24-mykaleidoscope-ru-p-kioto-stolitsa-yaponii-instagram-25.jpg",
    facts: ["1600 буддийских храмов.", "Более 1000 лет — столица Японии."],
  },
];

export default function CitySelector({ onSelectCity }) {
  const handleChange = (e) => {
    const city = citiesData.find((c) => c.name === e.target.value);
    onSelectCity(city);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Выберите город</option>
      {citiesData.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
}
