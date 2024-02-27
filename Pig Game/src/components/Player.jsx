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
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{curScore}</p>
      </div>
    </section>
  );
}

export default Player;
