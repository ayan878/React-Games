import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
