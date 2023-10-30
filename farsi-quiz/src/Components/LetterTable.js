import React from "react";
// import LetterTable from './LetterTable';

function LetterCell(props) {
  return (
    <td>
      <p>{props.letter}</p>
      <p>{props.sound}</p>
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
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default LetterTable;
