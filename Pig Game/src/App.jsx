import React, { useState } from "react";
import Player from "./components/Player";
import RollDiceButton from "./components/RollDiceButton";

function App() {
  const [playerName, setPlayerName] = useState("Player");
  const [score, setScore] = useState(0);
  const [curScore, setCurScore] = useState(0);

  return (
    <>
      <main>
        <Player
          score={score}
          curScore={curScore}
          playerName={playerName}
          setPlayerName={setPlayerName}
        />
        <Player
          score={score}
          curScore={curScore}
          playerName={playerName}
          setPlayerName={setPlayerName}
        />
        <RollDiceButton
          setPlayerName={setPlayerName}
          score={score}
          setScore={setScore}
          curScore={curScore}
          setCurScore={setCurScore}
        />
      </main>
    </>
  );
}

export default App;
