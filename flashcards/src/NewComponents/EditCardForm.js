import React, { useState } from "react";

function EditCardForm(props) {
  let [cardFront, setCardFront] = useState(props.data.front);
  let [cardBack, setCardBack] = useState(props.data.back);


  const editCardInDB = async () => {
    try {
      console.log("updating card...");
      console.log(props.data);
      const jsonData = { front: cardFront, back: cardBack, id: props.data.id };
      const response = await fetch("http://localhost:5000/edit_card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        props.createCardFunc(cardFront, cardBack, props.index);
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
    editCardInDB(cardFront, cardBack);
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditCardForm;
