import React, { useCallback, useEffect, useState } from "react";
import "./DeckMenu.css";
import DeckList from "./DeckList";
import CreateDeckForm from "./CreateDeckForm";

function DeckMenu(props) {
  const [createDeckMenuVisible, setCreateDeckMenuVisible] = useState(false);
  const handleNewDeck = () => {
    setCreateDeckMenuVisible(true);
  };

  const [deckList, setDeckList] = useState([]);
  const [error, setError] = useState(null);

  const fetchDecks = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:5000/decks");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(response);
      console.log(data);
      const transformedMovies = data.map((deckData) => {
        return {
          name: deckData.DeckName,
          id: deckData.id,
        };
      });
      setDeckList(transformedMovies);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchDecks();
  }, [fetchDecks]);
  /*
  [
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
  */

  const createNewDeck = (newDeckName) => {
    //newDeckName.preventDefault();
    console.log(newDeckName);
    setDeckList((deckList) => [...deckList, { name: newDeckName }]);
    //setItems((prevItems) => [...prevItems, newItem])
    //deckList.push(
  };
  return (
    <div className="deck_menu">
      <button onClick={handleNewDeck}>Create new deck</button>
      {createDeckMenuVisible && (
        <CreateDeckForm createDeckFunc={createNewDeck} />
      )}
      <DeckList decks={deckList} />
      <p>{error}</p>
    </div>
  );
}

export default DeckMenu;
