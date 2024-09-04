import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "random":
      return { count: action.payload };
    default:
      throw new Error("Acción no existente");
  }
};
const initialState = { count: 0 };

const ReducerCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const randomNum = Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "random", payload: randomNum })}>
        Random
      </button>
    </div>
  );
};

export default ReducerCount;
