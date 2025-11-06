import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function TextBlock() {
  const { language } = useContext(LanguageContext);

  const texts = {
    ru: {
      title: "Добро пожаловать!",
      desc: "Это приложение демонстрирует работу контекста в React.",
    },
    en: {
      title: "Welcome!",
      desc: "This app demonstrates how React Context works.",
    },
  };

  return (
    <div className="text-block">
      <h2>{texts[language].title}</h2>
      <p>{texts[language].desc}</p>
    </div>
  );
}
