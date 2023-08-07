import { useContext } from "react";
import { CounterContext } from "./context/counterContext";

export const Counter = () => {
  const { counter, handleIncrement, handleDecrement, handleReset } = useContext(CounterContext);

  return (
    <>
      <div className="counter">
        <button onClick={() => handleDecrement()}>Decrement</button>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
      <p>Counter: {counter} </p>
    </>
  );
};
