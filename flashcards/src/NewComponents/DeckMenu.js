import React, { useCallback, useEffect, useState } from "react";
import CreateDeckForm from "./CreateDeckForm";

function DeckMenu(props) {
  const [createDeckMenuVisible, setCreateDeckMenuVisible] = useState(false);
  const handleNewDeck = () => {
    setCreateDeckMenuVisible(true);
  };

  const hideDeckMenu = () => {
    setCreateDeckMenuVisible(false);
  };

  return (
    <div className="deck_menu">
      <button onClick={handleNewDeck}>Create new deck</button>
      {createDeckMenuVisible && (
        <CreateDeckForm
          createDeckFunc={props.addDeck}
          hideDeckMenu={hideDeckMenu}
        />
      )}
    </div>
  );
}

export default DeckMenu;
