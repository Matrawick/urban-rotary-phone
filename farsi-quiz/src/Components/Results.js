import React, { useState } from "react";
import QuestionContent from "./QuestionContent";



function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  function Results(props) {
    const questions = props.questionList;
    const listItems = questions.map((question) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={Math.random().toString()} value={question} />
    );
    return (
    <ul>
      {props.questionList.map((question) => (
        <QuestionContent
          question={question}
        />
      ))}
    </ul>
    );
  }


export default Results;