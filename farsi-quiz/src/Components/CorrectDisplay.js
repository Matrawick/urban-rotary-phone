import React, { useState } from 'react';
import './CorrectDisplay.css';

function CorrectDisplay(props) {
    
    let checkOrX = "";
    let cssClass = "";
    if (props.displayState === 'correct') {
        checkOrX = "v/";
        cssClass = "correct";
    }  
    else if (props.displayState === 'incorrect') {
        checkOrX = "X";
        cssClass = "incorrect";
    }
    else { // Assume that props.displayState is notSubmitted
        checkOrX = "";
        cssClass = "notSubmitted";
    }
    return (
        <div className={`${cssClass}`}>
            <span>{checkOrX}</span>
        </div>
    );
}

export default CorrectDisplay;