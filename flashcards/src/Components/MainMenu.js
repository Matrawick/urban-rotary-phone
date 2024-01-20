import React from "react";

function MainMenu() {
  const handleStudy = () => {
    alert("Study clicked");
  };
  const handleDeck = () => {
    alert("Deck clicked...");
  };
  return (
    <div>
      <button onClick={handleStudy}>Study</button>
      <button type="submit" onClick={handleDeck}>Create New Deck</button>
      
    </div>
  );
}

export default MainMenu;
