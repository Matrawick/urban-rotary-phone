import Quiz from "./Components/Quiz";
import AlphabetChart from "./Components/AlphabetChart";
import "./App.css";
import React, { useState } from "react";

function App() {
  
  const test = [['<span style="color:black">غ<span><span style="color:white">ش<span>', 'a'],
  ['<span style="color:white">ش<span><span style="color:black">غ<span>', "gh"]]
  const singleLetters = [
    ["ت", "t"],
    ["پ", "p"],
    ["ث", "s"],
    /* ["ج", "j"],
    ["چ", "ch"],
    ["ح", "h"],
    ["خ", "kh"],
    ["ن", "n"],
    ["ن", "m"],
    ["د", "d"],
    ["ر", "r"],
    ["ز", "z"],
    ["ژ", "zh"],
    ["ش", "sh"],
    ["و", "v"],
    ["ف", "f"],
    ["ق", "gh"],
    ["ص", "s"],
    ["ض", "z"],
    ["ط", "t"],
    ["ظ", "z"],
    ["ی", "y"],
    ["ک", "k"],
    ["گ", "g"],
    ["ل", "l"],
    ["غ", "gh"],
    ["ع", "a"],
    ["ه", "h"],
    ["ا", "a"]
    */
  ];
  const farsiAlphabet = [
    ["ب", "b"],
    ['<span style="color:black">ب<span><span style="color:white">ش<span>', "b"],
    ["ت", "t"],
    ['<span style="color:black">ت<span><span style="color:white">ش<span>', "t"],
    ["پ", "p"],
    ['<span style="color:black">پ<span><span style="color:white">ش<span>', "p"],
    ["ث", "s"],
    ['<span style="color:black">ث<span><span style="color:white">ش<span>', "s"],
    ["ج", "j"],
    ['<span style="color:black">ج<span><span style="color:white">ش<span>', "j"],
    ["چ", "ch"],
    ['<span style="color:black">چ<span><span style="color:white">ش<span>', "ch"],
    ["ح", "h"],
    ['<span style="color:black">ح<span><span style="color:white">ش<span>', "h"],
    ["خ", "kh"],
    ['<span style="color:black">خ<span><span style="color:white">ش<span>', "kh"],
    ["ن", "n"],
    ['<span style="color:black">ن<span><span style="color:white">ش<span>', "n"],
    ["م", "m"],
    ['<span style="color:black">م<span><span style="color:white">ش<span>', "m"],
    ["د", "d"],
    ["ر", "r"],
    ["ز", "z"],
    ["ژ", "zh"],
    ["ش", "sh"],
    ['<span style="color:black">ش<span><span style="color:white">ش<span>', "sh"],
    ["و", "v"],
    ["ف", "f"],
    ['<span style="color:black">ث<span><span style="color:white">ش<span>', "f"],
    ["ق", "gh"],
    ['<span style="color:black">ق<span><span style="color:white">ش<span>', "gh"],
    ["ص", "s"],
    ['<span style="color:black">ص<span><span style="color:white">ش<span>', "s"],
    ["ض", "z"],
    ['<span style="color:black">ض<span><span style="color:white">ش<span>', "z"],
    ["ط", "t"],
    ["ظ", "z"],
    ["ی", "y"],
    ['<span style="color:black">ی<span><span style="color:white">ش<span>', "y"],
    ["ک", "k"],
    ['<span style="color:black">ک<span><span style="color:white">ش<span>', "k"],
    ["گ", "g"],
    ['<span style="color:black">گ<span><span style="color:white">ش<span>', "g"],
    ['<span style="color:black">ل<span><span style="color:white">ش<span>', "l"],
    ["ل", "l"],
    ['<span style="color:white">ش<span><span style="color:black">غ<span>', "gh"], // final-after-connector
    ['<span style="color:black">غ<span><span style="color:white">ر<span>', "gh"], // final-after-non-connector
    ['<span style="color:white">ش<span><span style="color:black">غ<span><span style="color:white">ش<span>', "gh"], // medial
    ["غ", "gh"],
    ['<span style="color:white">ش<span><span style="color:black">ع<span>', "a"], // final-after-connector
    ['<span style="color:black">ع<span><span style="color:white">ر<span>', "a"], // final-after-non-connector
    ['<span style="color:white">ش<span><span style="color:black">ع<span><span style="color:white">ش<span>', "a"], // medial
    ["ع", "a"],
    ['<span style="color:white">ش<span><span style="color:black">ه<span>', "h"], // final-after-connector
    ['<span style="color:black">ه<span><span style="color:white">ر<span>', "h"], // final-after-non-connector
    ['<span style="color:white">ش<span><span style="color:black">ه<span><span style="color:white">ش<span>', "h"], // medial
    ["ه", "h"],
    ["ا", "a"],
  ];

  function shuffleArray(array) {
    console.log("How often does this get called?");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
  shuffleArray(farsiAlphabet);

  let [isQuizComplete, setIsQuizComplete] = useState(false);

  function endQuiz() {
    setIsQuizComplete(true);
  }

  /*
<div className="App">
      {!isQuizComplete && <Quiz questAnswerPairs={farsiAlphabet} title="Farsi Alphabet" onEndQuiz={endQuiz} />}
      {isQuizComplete && <p>Complete</p>}
    </div>
  */

  return (
    <div className="App">
      <AlphabetChart />
    </div>
  );
}

export default App;
