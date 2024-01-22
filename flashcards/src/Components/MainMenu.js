import React, { useState } from "react";
import DeckMenu from "./DeckMenu";

function MainMenu() {
  const handleStudy = () => {
    alert("Study clicked");
  };
  const handleDeck = () => {
    setIsDeckMenuVisible(true);
  };
  const [isDeckMenuVisible, setIsDeckMenuVisible] = useState(false);

  return (
    <div>
      <button onClick={handleStudy}>Study</button>
      <button type="submit" onClick={handleDeck}>Edit Decks</button>
      {isDeckMenuVisible && <DeckMenu />}
    </div>
  );
}

export default MainMenu;
