import "./styles.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextBlock from "./components/TextBlock";

function App() {
  return (
    <div className="app">
      <h1>React Language Context</h1>
      <LanguageSwitcher />
      <TextBlock />
    </div>
  );
}

export default App;
