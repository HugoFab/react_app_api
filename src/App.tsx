import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CharacterDetail from "./pages/CharacterDetail";

const App: React.FC = () => {
  return (
    <div className="App">
      <CharacterDetail />
    </div>
  );
};

export default App;
