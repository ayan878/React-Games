import React from "react";

function Header({ randomNumber, guessNumber, handleAgain }) {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 to 20)</p>
      <button className="btn again" onClick={handleAgain}>
        Again!
      </button>
      <div className="number">{guessNumber ? randomNumber : "?"}</div>
    </header>
  );
}

export default Header;
