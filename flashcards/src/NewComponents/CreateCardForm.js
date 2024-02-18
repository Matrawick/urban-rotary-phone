import React, { useState } from "react";

function CreateCardForm(props) {
  let [cardFront, setCardFront] = useState("");
  let [cardBack, setCardBack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createCardFunc(cardFront, cardBack);
    setCardFront("");
    setCardBack("");
    
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
