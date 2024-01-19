import logo from './logo.svg';
import './App.css';


import Menu from "./Components/Menu";
import "./App.css";
import React, { useState } from "react";

function App() {
  
  let [showMenu, setShowMenu] = useState(true);
  return (
    <div className="App">
      {showMenu && <Menu />}
    </div>
  );
}

export default App;
