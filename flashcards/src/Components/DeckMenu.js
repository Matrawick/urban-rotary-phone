import React from "react";

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