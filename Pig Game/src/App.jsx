import React from 'react'
import diceImg from './assets/dice-5.png'
function App() {
  return (
    <>
      <main>
        <section className="player player--0 player--active">
          <h2 className="name" id="name--0">
            Player 1
          </h2>
          <p className="score score--0">43</p>
          <div className="current">
            <p current-label>Current</p>
            <p className="current-score" id="current--0">
              0
            </p>
          </div>
        </section>
        <section className="player player--1 player--active">
          <h2 className="name" id="name--1">
            Player 1
          </h2>
          <p className="score score--1">43</p>
          <div className="current">
            <p current-label>Current</p>
            <p className="current-score" id="current--1">
              0
            </p>
          </div>
        </section>

        <img src={diceImg}alt="Playing dice" className="dice" />
        <button class="btn btn--new">🔄 New game</button>
        <button class="btn btn--roll">🎲 Roll dice</button>
        <button class="btn btn--hold">📥 Hold</button>
      </main>
    </>
  );
}

export default App