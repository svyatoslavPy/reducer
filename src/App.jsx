import { Counter } from "./Counter";
import { CounterProvider } from "./context/counterContext";

export const App = () => {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};
