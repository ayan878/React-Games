import { useState } from "react";
import dice1 from "../assets/dice-1.png";
import dice2 from "../assets/dice-2.png";
import dice3 from "../assets/dice-3.png";
import dice4 from "../assets/dice-4.png";
import dice5 from "../assets/dice-5.png";
import dice6 from "../assets/dice-6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function RollDiceButton({
  players,
  setPlayers,
  curScore,
  setCurScore,
  activePlayerIndex,
  setActivePlayerIndex,
}) {
  const [currentImage, setCurrentImage] = useState(dice6);
  const [showDice, setShowDice] = useState(false);

  const getRandomDice = () => {
    return Math.floor(Math.random() * diceImages.length);
  };

  const handleRollDice = () => {
    const diceValue = getRandomDice();
    setCurrentImage(diceImages[diceValue]);
    setShowDice(true);
    setCurScore(diceValue + 1);

    // If the dice value is 1, switch to the next player
    if (diceValue + 1 === 1) {
      const nextPlayerIndex =
        activePlayerIndex === players.length - 1 ? 0 : activePlayerIndex + 1;
      setActivePlayerIndex(nextPlayerIndex);
    } else {
      // Update the score for the active player if the dice value is not 1
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[activePlayerIndex].score += diceValue + 1;
        return updatedPlayers;
      });
    }
  };

  const handleHold = () => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[activePlayerIndex].score += curScore;
      return updatedPlayers;
    });
    setCurScore(0);
  };
const handleNew = () => {
  setShowDice(false);
  const initialPlayers = players.map((player,index) => ({
    ...player,
    name: player.name.startsWith("Player")
      ? player.name
      : `Player ${index+1}`,
    score: 0,
  }));
  setActivePlayerIndex(0)
  setPlayers(initialPlayers);
  setCurScore(0);
};

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
