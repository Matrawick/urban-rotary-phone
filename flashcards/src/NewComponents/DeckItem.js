import React, { useState } from "react";

const DeckItem = (props) => {
  const studyDeck = () => {
    props.setStudyMode(true);
    props.setDeckSelected(props.deckId);
  };

  return (
    <div>
      <div>
        <button onClick={studyDeck}> {props.name} </button>
      </div>
    </div>
  );
};

export default DeckItem;
