import { useState } from "react";

function Player({score,curScore,setPlayerName,playerName}) {
  // const [playerName, setPlayerName] = useState("Player");

  function handlePlayerName(e) {
    setPlayerName(e.target.value);
  }

  return (
    <section className="player player--0 player--active">
      <input
        type="text"
        className="name"
        value={playerName}
        onChange={handlePlayerName}
      />
      <p className="score score--0">{score}</p>
      <div className="current" >
        <p className="current-label">Current</p>
        <p className="current-score" id="current--0">
          {curScore}
        </p>
      </div>
    </section>
  );
}

export default Player;
