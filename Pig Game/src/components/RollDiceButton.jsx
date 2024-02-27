import { useState } from "react";
import dice1 from "../assets/dice-1.png";
import dice2 from "../assets/dice-2.png";
import dice3 from "../assets/dice-3.png";
import dice4 from "../assets/dice-4.png";
import dice5 from "../assets/dice-5.png";
import dice6 from "../assets/dice-6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function RollDiceButton({
  setScore,
  curScore,
  setCurScore,
  setPlayerName,
}) {
  const [currentImage, setCurrentImage] = useState(dice6);
  const [showDice, setShowDice] = useState(false);

  const getRandomDice = () => {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    return randomIndex;
  };

  function handleRollDice() {
    // const randomDiceImage = getRandomDice();
    const diceValue = getRandomDice();
    setCurrentImage(diceImages[diceValue]);
    setShowDice(true);
    setCurScore(diceValue + 1);
    setScore((prevScore) => prevScore + curScore);
    console.log("Curent", curScore);
  }

  function handleHold() {
    setScore((prevScore) => prevScore + curScore);
    setCurScore(0);
  }

  function handleNew() {
    setShowDice(false);
    setPlayerName("Player");
    setScore(0);
    setCurScore(0);
  }
  return (
    <>
      {showDice && (
        <img src={currentImage} alt="Playing dice" className="dice" />
      )}
      <button className="btn btn--new" onClick={handleNew}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </>
  );
}

export default RollDiceButton;
