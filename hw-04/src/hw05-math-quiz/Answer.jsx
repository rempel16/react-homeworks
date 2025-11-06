import React, { useState } from "react";

export default function Answer({ a, b, updatePoints }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCorrect = Number(input) === a + b;
    updatePoints(isCorrect);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Ответить</button>
    </form>
  );
}
