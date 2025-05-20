import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((list) => [...list, "New Todo"]);
  }, []);
  return (
    <>
      <Child todos={todos} addTodo={addTodo} />
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </>
  );
};

export default Parent;
