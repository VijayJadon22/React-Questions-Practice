import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment": {
      return { count: state.count + 1 };
    }
    case "Decrement": {
      return { count: state.count - 1 };
    }
    case "Reset": {
      return { count: 0 };
    }
    default: {
      return state;
    }
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      Counter
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
