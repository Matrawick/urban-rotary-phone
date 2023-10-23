import React from 'react';

function LetterTable(props) {
    const itemsPerRow = 4;
    const items = props.letters;
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      const rowItems = items.slice(i, i + itemsPerRow);
      const cells = rowItems.map((item, index) => (
        <td key={index}><{item}</td>
      ));
      rows.push(<tr key={i}>{cells}</tr>);
    }
  
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }