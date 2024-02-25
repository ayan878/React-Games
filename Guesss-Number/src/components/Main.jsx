export default function Main({ inputValue, handleChange, handleCheck ,message,score,highscore}) {
  return (
    <main>
      <section className="left">
        <input
          type="number"
          className="guess"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="btn check" onClick={handleCheck}>
          Check!
        </button>
      </section>
      <section className="right">
        <p className="message">{message}</p>
        <p className="label-score">
          Score:<span className="score">{score}</span>
        </p>
        <p className="label-highscore">
          🎖️Highscore <span className="highscore">{highscore}</span>
        </p>
      </section>
    </main>
  );
}
