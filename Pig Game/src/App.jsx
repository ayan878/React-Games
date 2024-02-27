import React, { useState } from "react";
import Player from "./components/Player";
import RollDiceButton from "./components/RollDiceButton";

function App() {
  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0, curScore: 0 },
    { name: "Player 2", score: 0, curScore: 0 },
  ]);

  // const [curScore, setCurScore] = useState(0);
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);

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
            setPlayerName={(newName) => {
              const updatedPlayers = [...players];
              updatedPlayers[index].name = newName;
              setPlayers(updatedPlayers);
            }}
          />
        ))}
        <RollDiceButton
          players={players}
          setPlayers={setPlayers}
          curScore={curScore}
          setCurScore={setCurScore}
          activePlayerIndex={activePlayerIndex}
          setActivePlayerIndex={setActivePlayerIndex}
        />
      </main>
    </>
  );
}

export default App;
