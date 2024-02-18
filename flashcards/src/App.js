import logo from './logo.svg';
import './App.css';


import MainMenu from "./Components/MainMenu";
import "./App.css";
import React, { useState } from "react";
import DeckMenu from './Components/DeckMenu';
import AppWrapper from './NewComponents/AppWrapper';

function App() {
  
  return (
    <AppWrapper />
  )
  /*
  let [showMenu, setShowMenu] = useState(true);
  return (
    <div className="App">
      {showMenu && <DeckMenu/>}
    </div>
  );
  */
}

export default App;
