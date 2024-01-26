import React from "react";
import "./DeckMenu.css";
import "./DeckList";

function DeckMenu(props) {
  const handleNewDeck = () => {
    alert("new deck created!");
  };

  const deckList = [
    {
      name: "Numbers",
      num_learned: 1,
      num_to_learn: 9,
    },
    {
      name: "Colors",
      num_learned: 1,
      num_to_learn: 9,
    },
  ];
  return (
    <div className="deck_menu">
      <button onClick={handleNewDeck}>Create new deck</button>
      <DeckList decks={deckList} />
    </div>
  );
}

export default DeckMenu;
