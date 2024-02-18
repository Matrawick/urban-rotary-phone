import React, {useState} from "react";


function CreateDeckForm(props) {
  const [deckName, setDeckName] = useState("");

  const addDeck = async () => {
    try {
      const jsonData = {"deckName":deckName}
      const response = await fetch('http://localhost:5000/add_deck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        props.createDeckFunc(
          {name:deckName,
            id:result.id
          });
        props.hideDeckMenu();
      } else {
        const data = await response.json();
        const message = data.message; 
        console.error(message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  };

  const handleSubmit = (e) => {
    console.log(e);  
    e.preventDefault();
    addDeck();
  }
  
  const handleInputChange = (e) => {
    
    setDeckName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Deck Name:
          <input
            type="text"
            value={deckName}
            onChange={handleInputChange}
            placeholder="Enter deck name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateDeckForm;
