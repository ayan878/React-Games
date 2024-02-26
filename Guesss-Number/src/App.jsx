import { useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import gameReducer, { initialState } from "./gameReducer";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const handleChange = (event) => {
    dispatch({ type: "input", value: Number(event.target.value) });
  };

  const handleCheck = () => {
    dispatch({ type: "check", bgColor: "#60b347" });
  };

  const handleAgain = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div style={{ backgroundColor: state.bgColor }}>
      <Header
        randomNumber={state.randomNumber}
        handleCheck={handleCheck}
        guessNumber={state.guessNumber}
        handleAgain={handleAgain}
      />
      <Main
        inputValue={state.inputValue}
        handleChange={handleChange}
        handleCheck={handleCheck}
        message={state.message}
        score={state.score}
        highscore={state.highscore}
      />
    </div>
  );
}

export default App;
