import logo from './logo.svg';
import './App.css';


import MainMenu from "./Components/MainMenu";
import "./App.css";
import React, { useState } from "react";

function App() {
  
  let [showMenu, setShowMenu] = useState(true);
  return (
    <div className="App">
      {showMenu && <MainMenu />}
    </div>
  );
}

export default App;
