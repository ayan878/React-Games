import React, { useState } from "react";
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

    if (diceValue + 1 === 1) {
      // If the dice value is 1, switch to the next player
      const nextPlayerIndex =
        activePlayerIndex === players.length - 1 ? 0 : activePlayerIndex + 1;
      setActivePlayerIndex(nextPlayerIndex);
    } else {
      // If the dice value is not 1, update the score and curScore of the active player
      setPlayers((prevPlayers) => {
        return prevPlayers.map((player, index) => {
          if (index === activePlayerIndex) {
            return {
              ...player,
              curScore: diceValue + 1,
              score: player.score + diceValue + 1,
            };
          } else {
            return player;
          }
        });
      });
    }
  };

  const handleHold = () => {
    // Update the score of the active player and reset curScore to 0
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player, index) => {
        if (index === activePlayerIndex) {
          return {
            ...player,
            score: player.score + player.curScore,
            curScore: 0,
          };
        } else {
          return player;
        }
      });
    });
  };

  const handleNew = () => {
    // Reset all scores and curScores to 0 for a new game
    const initialPlayers = players.map((player, index) => ({
      ...player,
      name: player.name.startsWith("Player")
        ? player.name
        : `Player ${index + 1}`,
      score: 0,
      curScore: 0,
    }));
    setActivePlayerIndex(0);
    setPlayers(initialPlayers);
    setShowDice(false);
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
