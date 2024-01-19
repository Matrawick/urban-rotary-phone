import React, { useState } from "react";
import LetterInfo from './LetterTable';



function LetterCell(props) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <td onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p> {props.letter}</p>
      <p> {props.sound}</p>
      <div>
      {isHovered && (<LetterInfo />
      )
      }
        </div>
      
      
    </td>
  );
}

function LetterTable(props) {
  const itemsPerRow = 4;
  const items = props.letters;
  const rows = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    const rowItems = items.slice(i, i + itemsPerRow);
    const cells = rowItems.map((item, index) => LetterCell(item));
    rows.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div className="grid-container">
      {props.items.map((expense) => (
          <LetterCell
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
    
  );
}

export default LetterTable;
