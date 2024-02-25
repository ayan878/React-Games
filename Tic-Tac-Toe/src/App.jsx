// import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";
function App() {
  return (
    <main className="bg-yellow-300 flex flex-col items-center justify-start h-screen bg-image1 bg-image2 bg-auto">
      <Header />
      {/* <GameBoard /> */}
      <div className="">
        <ol className="flex justify-center gap-12 ">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        {/* GAME BOARD */}
        {/* LOG */}
      </div>
    </main>
  );
}

export default App;
