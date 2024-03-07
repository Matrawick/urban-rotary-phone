import React, { useCallback, useEffect, useState } from "react";
import CreateCardForm from "./CreateCardForm";
import EditCardForm from "./EditCardForm";
import Card from "./Card";

function StudyWrapper(props) {
  const [error, setError] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [buttonText, setButtonText] = useState("flip");
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [createCardVisible, setCreateCardVisible] = useState(false);
  const [editCardSelected, setEditCardSelected] = useState(false);

  const fetchCards = useCallback(async () => {
    setError(null);

    try {
      const jsonData = { id: props.deck };
      const response = await fetch("http://127.0.0.1:5000/cards/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(response);
      const transformedCards = data.map((cardData) => {
        return {
          front: cardData.front,
          back: cardData.back,
          id: cardData.id,
        };
      });
      setCardList(transformedCards);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }, [props.deck]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);


  const incrementCardIndex = () => {
    setCardIndex(cardIndex + 1);
  };

  const handleFlip = () => {
    if (!isFlipped) {
      setButtonText("next");
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
      incrementCardIndex();
      setButtonText("flip");
    }
  };
  const handleNewCard = () => {
    setCreateCardVisible(true);

  };
  const handleEditCard = () => {
    setCreateCardVisible(false);
    setEditCardSelected(true);
  };

  const createNewCard = (front, back) => {
    console.log("Inside createNewCard: " + front);
    setCreateCardVisible(false);
    setCardList((cardList) => [...cardList, { front: front, back: back }]);
  };

  const editCard = (front, back, index) => {
    console.log("Inside editCard: " + front);
    setEditCardSelected(false);
    cardList[index] = {front: front, back: back}
    setCardList((cardList) => cardList);
  };

  return (
    <div>
      {!createCardVisible && (
        <button onClick={handleNewCard}>Create new card</button>
      )}
      {!createCardVisible && (
        <button onClick={handleEditCard}>Edit Card</button>
      )}
      {createCardVisible && (
        <CreateCardForm
          createCardFunc={createNewCard}
          deck={props.deck}
          isEdit={editCardSelected}
          data={cardList[cardIndex]}
        />
      )}
      {editCardSelected && (
        <EditCardForm
          createCardFunc={editCard}
          deck={props.deck}
          isEdit={editCardSelected}
          data={cardList[cardIndex]}
          index={cardIndex}
        />
      )}
      {cardIndex < cardList.length && (
        <Card data={cardList[cardIndex]} showBack={isFlipped} />
      )}
      {cardIndex >= cardList.length && <p>Done studying</p>}
      <button onClick={handleFlip}>{buttonText}</button>
      <p>{error}</p>
    </div>
  );
}

export default StudyWrapper;
