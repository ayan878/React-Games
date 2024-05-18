import Counter from "./Counter";
import { CounterProvider } from "./CounterContext";

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
