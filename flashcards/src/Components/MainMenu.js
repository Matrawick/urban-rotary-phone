import React, { useState } from "react";
import DeckMenu from "./DeckMenu";
import CreateDeckForm from "./CreateDeckForm";

function MainMenu() {
  const handleStudy = () => {
    alert("Study clicked");
  };
  const handleDeck = () => {
    setIsDeckMenuVisible(true);
  };
  const [isDeckMenuVisible, setIsDeckMenuVisible] = useState(false);
  const [isEditDeckVisible, setIsEditDeckVisible] = useState(false);

  return (
    <div>
      <button onClick={handleStudy}>Study</button>
      <button type="submit" onClick={handleDeck}>Edit Decks</button>
      {isDeckMenuVisible && <DeckMenu />}
      {isDeckMenuVisible && <CreateDeckForm />}
    </div>
  );
}

export default MainMenu;
