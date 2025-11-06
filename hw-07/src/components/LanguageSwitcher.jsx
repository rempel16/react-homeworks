import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button className="btn" onClick={toggleLanguage}>
      {language === "ru" ? "Сменить язык" : "Change language"}
    </button>
  );
}
