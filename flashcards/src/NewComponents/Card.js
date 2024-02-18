import React, { useState } from "react";

function Card(props) {
  return (
    <div>
      <div>
        <p>{props.data.front}</p>
      </div>
      <div>
      <p>{props.showBack && props.data.back}</p>
      </div>
    </div>
  );
}

export default Card;