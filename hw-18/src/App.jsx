import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Main page</h1>} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
