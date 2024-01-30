import React, {useState} from "react";
import "./DeckMenu.css";
import DeckList from "./DeckList";
import CreateDeckForm from "./CreateDeckForm";

function DeckMenu(props) {
  
  const [createDeckMenuVisible, setCreateDeckMenuVisible] = useState(false);
    const handleNewDeck = () => {
    setCreateDeckMenuVisible(true);
  };

  let [deckList, setDeckList] = useState([
    {
        name: "Numbers",
        num_learned: 1,
        num_to_learn: 9,
      },
      {
        name: "Colors",
        num_learned: 1,
        num_to_learn: 9,
      },  
  ]);

  const createNewDeck = (newDeckName) => {
    //newDeckName.preventDefault();
    console.log(newDeckName);
    setDeckList((deckList) => [...deckList, {name: newDeckName,
        num_learned: 0,
        num_to_learn: 0
        }]);
    //setItems((prevItems) => [...prevItems, newItem])
    //deckList.push(
  };
  return (
    <div className="deck_menu">
      <button onClick={handleNewDeck}>Create new deck</button>
      {createDeckMenuVisible && <CreateDeckForm createDeckFunc={createNewDeck}/>}
      <DeckList decks={deckList} />
    </div>
  );
}

export default DeckMenu;
