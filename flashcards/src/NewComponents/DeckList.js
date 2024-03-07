import React, { useCallback, useEffect, useState } from "react";
import DeckItem from "./DeckItem";

function DeckList(props) {
  return (
    <ul>
      {props.deckList.map((deck) => (
        <DeckItem
          name={deck.name}
          deckId={deck.id}
          setStudyMode={props.setStudyMode}
          setDeckSelected={props.setDeckSelected}
        />
      ))}
    </ul>
  );
}

export default DeckList;
