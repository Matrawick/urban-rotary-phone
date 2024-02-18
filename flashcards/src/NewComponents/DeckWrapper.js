import React, {useCallback, useEffect, useState}  from "react";
import DeckMenu from "./DeckMenu";
import DeckList from "./DeckList";

function DeckWrapper(props) {

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
      console.log(transformedMovies);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchDecks();
  }, [fetchDecks]);

  function addDeck(newDeckObj) {
    console.log("new deck obj = " + newDeckObj);
    setDeckList(deckList => [...deckList, newDeckObj]);
  }


  return (
    <div>
      <DeckMenu addDeck={addDeck} />
      <DeckList
        deckList={deckList}
        setStudyMode={props.setStudyMode}
        setDeckSelected={props.setDeckSelected}
      />
      <p>{error}</p>
    </div>
  );
}

export default DeckWrapper;
