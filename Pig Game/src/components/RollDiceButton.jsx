import diceImg from "../assets/dice-5.png";

function RollDiceButton() {
  return (
    <>
      {" "}
      <img src={diceImg} alt="Playing dice" className="dice" />
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </>
  );
}

export default RollDiceButton;
