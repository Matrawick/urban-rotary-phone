import "./Quiz.css";
import Question from "./Question";
import Results from "./Results";

import React, { useState } from "react";

function Quiz(props) {
  const questionList = props.questAnswerPairs;
  console.log(questionList);

  const totalQuestions = questionList.length;

  let [numAnswered, setNumAnswered] = useState(0);
  let [numCorrect, setNumCorrect] = useState(0);
  let [currQuestion, setCurrQuestion] = useState(0);
  let [questionsAnswered, setQuestionsAnswered] = useState([]);

  function reportFromQuestion(wasCorrect) {
    setQuestionsAnswered( (prevQuestionsAnswered) => {
      return [questionList[currQuestion][0], ...prevQuestionsAnswered]
    });
    setNumAnswered(numAnswered + 1);
    setCurrQuestion(currQuestion + 1);
    
    numAnswered++;
    if (wasCorrect) {
      setNumCorrect(numCorrect + 1);
      //setAnsweredClass("correct");
    }
    if (numAnswered === totalQuestions) {
      props.onEndQuiz();
    }
    return "I need writting";
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <Question
        questIndex={currQuestion}
        questionWithAns={questionList[currQuestion]}
        uponAnswering={reportFromQuestion}
      />
      <p>Questions answered</p>
      <Results questionList={questionsAnswered} />
      <p>
        {numCorrect} / {numAnswered}
      </p>

    </div>
  );
}

export default Quiz;
