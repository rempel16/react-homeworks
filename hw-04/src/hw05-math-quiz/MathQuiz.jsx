import React, { useState } from "react";
import Answer from "./Answer";

export default function MathQuiz() {
  const [points, setPoints] = useState(0);

  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);

  const updatePoints = (isCorrect) => {
    if (isCorrect) setPoints((p) => p + 1);
    else setPoints((p) => p - 1);
  };

  return (
    <div>
      <h3>
        Сколько будет {a} + {b} ?
      </h3>

      <p>Ваши баллы: {points}</p>

      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}
