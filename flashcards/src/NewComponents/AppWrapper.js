import React, { useState } from "react";
import DeckWrapper from "./DeckWrapper";
import StudyWrapper from "./StudyWrapper";

function AppWrapper() {
  const [isStudyMode, setStudyMode] = useState(false);
  const [deckSelected, setDeckSelected] = useState(null);
  let content = <p>Loading....</p>;

  function setStudy(value) {
    setStudyMode(value);
  }

  function setDeck(value) {
    setDeckSelected(value);
  }

  if (!isStudyMode) {
    content = (
      <DeckWrapper
        setStudyMode={setStudyMode}
        setDeckSelected={setDeckSelected}
      />
    );
  }
  if (isStudyMode) {
    content = <StudyWrapper deck={deckSelected} setStudyMode={setStudy} />;
  }
  return <div>{content}</div>;
}

export default AppWrapper;
