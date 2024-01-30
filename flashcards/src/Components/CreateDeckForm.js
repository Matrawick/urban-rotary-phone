import React, {useState} from "react";


function CreateDeckForm(props) {
  const [deckName, setDeckName] = useState("");

  const handleSubmit = (e) => {
    console.log(e);  
    e.preventDefault();
    props.createDeckFunc(deckName);
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
