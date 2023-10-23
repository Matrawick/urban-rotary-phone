import React, { useState } from 'react';
import  './Question.css';
import CorrectDisplay  from './CorrectDisplay';
import QuestionContent from './QuestionContent';


function Question(props) {
    
    const [submission, setSubmission] = useState('');
    const question = props.questionWithAns[0];
    const answer = props.questionWithAns[1];
    let [answeredClass, setAnsweredClass] = useState('notSubmitted');

    function submitHandler(event) {
        event.preventDefault();
        setSubmission('');
        const wasCorrect = submission === answer;
        console.log("The answer is " + answer);
        console.log("The response is " + submission);
        props.uponAnswering(wasCorrect);
        if (wasCorrect) {
            setAnsweredClass('correct');
        }
        else {
            setAnsweredClass('incorrect');
        }
        setTimeout(function() {
            setAnsweredClass('notSubmitted');
            }, 250);

    }

    const inputChangeHandler = (event) => {
        setSubmission(event.target.value);
        setAnsweredClass('notSubmitted');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
            <QuestionContent question={question} />
            <CorrectDisplay 
            displayState={answeredClass}/>
            <input type="text" onChange={inputChangeHandler} value={submission} placeholder="type answer here"></input>
            <button type='submit'>Check Answer</button>
            </form>
        </div>
    );
}

export default Question;