import React, { useState } from "react";

function CreateCardForm(props) {
  let [cardFront, setCardFront] = useState("");
  let [cardBack, setCardBack] = useState("");


  const addCardToDB = async () => {
    try {
      const jsonData = { front: cardFront, back: cardBack, deck: props.deck };
      const response = await fetch("http://localhost:5000/add_card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        props.createCardFunc(cardFront, cardBack);
        setCardFront("");
        setCardBack("");
      } else {
        const data = await response.json();
        const message = data.message;
        console.error(message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCardToDB(cardFront, cardBack);
  };

  const handleInputFrontChange = (e) => {
    setCardFront(e.target.value);
  };
  const handleInputBackChange = (e) => {
    setCardBack(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Card front:
          <input
            type="text"
            value={cardFront}
            onChange={handleInputFrontChange}
            placeholder="Enter card front"
          />
        </label>
        <label>
          Card back:
          <input
            type="text"
            value={cardBack}
            onChange={handleInputBackChange}
            placeholder="Enter back front"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateCardForm;