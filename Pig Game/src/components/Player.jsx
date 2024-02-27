import React from "react";

function Player({ score, curScore, playerName, setPlayerName, isActive }) {
  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <section className={`player ${isActive ? "player--active" : ""}`}>
      <input
        type="text"
        className="name"
        value={playerName}
        onChange={handlePlayerNameChange}
      />
      <p className="score score--0">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>

        <p className="current-score" id="current--0">
          {curScore}
        </p>
      </div>
    </section>
  );
}

export default Player;
