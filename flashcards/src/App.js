import logo from './logo.svg';
import './App.css';


import MainMenu from "./Components/MainMenu";
import "./App.css";
import React, { useState } from "react";
import DeckMenu from './Components/DeckMenu';

function App() {
  
  let [showMenu, setShowMenu] = useState(true);
  return (
    <div className="App">
      {showMenu && <DeckMenu/>}
    </div>
  );
}

export default App;
