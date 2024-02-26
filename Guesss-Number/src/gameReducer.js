import { useReducer } from "react";

// Generate random number outside reducer to keep it consistent across renders
const randomNumber = Math.floor(Math.random() * 20) + 1;

export const initialState = {
  inputValue: 0,
  bgColor: "#222",
  guessNumber: false,
  message: "Guessing number...",
  score: 20,
  randomNumber: randomNumber,
  highscore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { ...initialState };

    case "check":
      // Check if score is already 0
      if (state.score === 0) {
        return { ...state, message: "💥 You lost!" };
      }
      // Check if guessed correctly
      else if (parseInt(state.inputValue, 10) === state.randomNumber) {
        return {
          ...state,
          guessNumber: true,
          message: "🎉 Correct number!",
          bgColor: action.bgColor,
          highscore:
            state.score > state.highscore ? state.score : state.highscore,
        };
      }
      // Check if guess is too high
      else if (parseInt(state.inputValue, 10) > state.randomNumber) {
        return { ...state, score: state.score - 1, message: "📈 Too high!" };
      }
      // Check if guess is too low
      else if (parseInt(state.inputValue, 10) < state.randomNumber) {
        return { ...state, score: state.score - 1, message: "📉 Too low!" };
      }

    // Update inputValue when user types in the input field
    case "input":
      return { ...state, inputValue: action.value };

    default:
      return state;
  }
}

export default reducer;
