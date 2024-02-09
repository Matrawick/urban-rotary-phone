import React from "react";
import DeckItem from "./DeckItem";

const DeckList = (props) => {
  return (
    <ul>
      {props.decks.map((deck) => (
        <DeckItem name={deck.name} id={deck.id} />
      ))}
    </ul>
  );
};

export default DeckList;
