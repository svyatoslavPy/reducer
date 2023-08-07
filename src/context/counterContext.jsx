import React, { useReducer } from "react";
import { counterReducer, initialState } from "../reducers/counterReducer";

export const CounterContext = React.createContext({
  state: {},
  handleIncrement: () => {},
  handleDecrement: () => {},
  handleReset: () => {},
});

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const getValueContext = () => {
    return {
      counter: state.counter,
      handleIncrement,
      handleDecrement,
      handleReset,
    };
  };

  return <CounterContext.Provider value={getValueContext()}>{children}</CounterContext.Provider>;
};
