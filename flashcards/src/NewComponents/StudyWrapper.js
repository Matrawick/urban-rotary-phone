import React, {useCallback, useEffect, useState} from "react";
import CreateCardForm from "./CreateCardForm";
import Card from "./Card";


function StudyWrapper(props) {


    const [error, setError] = useState(null);
    const [cardList, setCardList] = useState ([]);
    
    const fetchCards = useCallback(async () => {
        setError(null);
        try {
          const response = await fetch("http://127.0.0.1:5000/cards/1");
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const data = await response.json();
          console.log(response);
          console.log(data);
          const transformedCards = data.map((cardData) => {
            return {
              front: cardData.front,
              back: cardData.back,
            };
          });
          setCardList(transformedCards);
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
      }, []);
    
      useEffect(() => {
        fetchCards();
      }, [fetchCards]);
    
    
    // Add a front and a back and a button to flip and continue.
    const [buttonText, setButtonText] = useState("flip");
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);
    const [createCardVisible, setCreateCardVisible] = useState(false);
    

    const incrementCardIndex = () => {
        setCardIndex(cardIndex+1) ;
    }

    const handleFlip = () => {
        if (!isFlipped) {
            setButtonText("next");
            setIsFlipped(true);
        }
        else {
            setIsFlipped(false);
            incrementCardIndex();
            setButtonText("flip");
        }
    };
    const handleNewCard = () => {
        setCreateCardVisible(true);
    };

    const createNewCard = (front, back) => {
        console.log("Inside createNewCard: " + front);
        setCreateCardVisible(false);
        setCardList((cardList) => 
            [...cardList, {front: front,
                back: back
                }]);
             
    };

    return (
        <div>
            {!createCardVisible && <button onClick={handleNewCard}>Create new card</button>}
            {createCardVisible && <CreateCardForm createCardFunc={createNewCard}/>}
            {cardIndex < cardList.length && <Card data={cardList[cardIndex]} showBack={isFlipped}/>}
            {cardIndex >= cardList.length && <p>Done studying</p>}
            <button onClick={handleFlip}>{buttonText}</button>
            <p>{error}</p>
        </div>
    )
}


export default StudyWrapper;