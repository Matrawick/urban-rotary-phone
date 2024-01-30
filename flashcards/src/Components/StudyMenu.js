import React, {useState} from "react";
import Card from "./Card";
import CreateCardForm from "./CreateCardForm"

function StudyMenu() {
    
    // Here is a list of cards that would be coming from the db.
    let [cardList, setCardList] = useState ([
        {
            "front":"1",
            "back":"yek"
        },
        {
            "front":"2",
            "back":"do"
        }
    ]);

    
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
        </div>
    )
}

export default StudyMenu;