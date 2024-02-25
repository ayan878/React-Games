import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const randomNumber = Math.floor(Math.random() * 20) + 1;
function App() {
  const [inputValue, setInputValue] = useState(0);
  const [guessNumber, setGuessNumber] = useState(false);
  const [message, setMessage] = useState("Start guessing...");
  const [bgColor, setBgColor] = useState("#222");
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(20);

  console.log(randomNumber);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleCheck() {
   if (randomNumber > inputValue) {
         setMessage("📉 Low number");
       }
    else if  (randomNumber < inputValue) {
         setMessage("📈 High number");
       } 
   else if (randomNumber === parseInt(inputValue, 10)) {
      setGuessNumber(!guessNumber);
      setMessage("🎉 Correct number!");
      setBgColor("#60b347");
      setHighscore(highscore < score ? score : highscore);
      console.log(guessNumber);
    } else {
      setScore(score - 1);
    }
  }
 
  function handleAgain() {
    setInputValue(0);
    setBgColor("#222");
    setGuessNumber(false);
    setMessage("Guessing number...");
    setScore(20);
  }
  return (
    <div style={{ backgroundColor: bgColor }}>
      <Header
        randomNumber={randomNumber}
        handleCheck={handleCheck}
        guessNumber={guessNumber}
        handleAgain={handleAgain}
      />
      <Main
        inputValue={inputValue}
        handleChange={handleChange}
        handleCheck={handleCheck}
        message={message}
        score={score}
        highscore={highscore}
      />
    </div>
  );
}

export default App;
