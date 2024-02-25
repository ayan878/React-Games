import gameLogo from "../assets/game-logo.png"
function Header() {
  return (
    <header className="flex flex-col justify-center items-center mt-8">
      <img src={gameLogo} alt="logo" className="h-32 items-center" />
      <h1 className="text-4xl text-center font-caprasimo font-bold mt-2 mb-2 ">
        Tic Tac Toe
      </h1>
    </header>
  );
}

export default Header