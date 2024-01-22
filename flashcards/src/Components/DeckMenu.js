import React from "react";
import './DeckMenu.css'; 

function DeckMenu() {

    const handleNewDeck = () => {
        alert("new deck created!");
      };
    return (
        <div className="deck_menu">
            <button onClick={handleNewDeck}>Create new deck</button>
            <div>
                <p>List of decks here</p>
            </div>
        </div>
    )
}

export default DeckMenu;