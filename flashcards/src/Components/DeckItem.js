import React, { useState } from "react";
import StudyMenu from "./StudyMenu";

const DeckItem = (props) => {

    const [isStudyVisible, setStudyVisible] = useState(false);

    const studyDeck = () => {
        // Open the study screen and begin studying
        // Let the study screen appear beneath the deck list. 
        if (isStudyVisible) {
            setStudyVisible(false);
        }
        else {
            setStudyVisible(true);
        }
    };

  return (
    <div>
      <div>
        <button onClick={studyDeck}>{props.name} </button> <span>{props.num_learned}</span><span>{props.num_to_learn}</span>
      </div>
      {isStudyVisible && <StudyMenu />}
    </div>
  );
};

export default DeckItem;
