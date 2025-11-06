import { useState } from "react";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  const deletePerson = (id) => {
    setPeople((prev) => prev.filter((person) => person.id !== id));
  };

  return (
    <div style={{ width: "350px", margin: "30px auto" }}>
      <h2>Список приглашённых</h2>

      <ul style={{ padding: 0 }}>
        {people.map((person) => (
          <li
            key={person.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #ddd",
              listStyle: "none",
            }}
          >
            {person.name}, {person.age} лет
            <button
              onClick={() => deletePerson(person.id)}
              style={{
                background: "crimson",
                color: "white",
                border: "none",
                padding: "4px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
