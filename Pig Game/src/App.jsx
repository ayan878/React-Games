import React, { useState } from "react";
import Player from "./components/Player";
import RollDiceButton from "./components/RollDiceButton";
import Winner from "./components/Winner";

function App() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0, curScore: 0 },
    { name: "Player 2", score: 0, curScore: 0 },
  ]);

  const [activePlayerIndex, setActivePlayerIndex] = useState(0);
  const winner = players.find((player) => player.score >= 100);

  const handlePlayerNameChange = (index, newName) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index].name = newName;
      return updatedPlayers;
    });
  };

  return (
    <>
      <main>
        {players.map((player, index) => (
          <Player
            key={index}
            playerName={player.name}
            score={player.score}
            curScore={player.curScore}
            isActive={activePlayerIndex === index}
            setPlayerName={(newName) => handlePlayerNameChange(index, newName)}
          />
        ))}
        <RollDiceButton
          players={players}
          setPlayers={setPlayers}
          curScore={players[activePlayerIndex].curScore}
          activePlayerIndex={activePlayerIndex}
          setActivePlayerIndex={setActivePlayerIndex}
        />
      </main>
      {winner && <Winner />}
    </>
  );
}

export default App;
