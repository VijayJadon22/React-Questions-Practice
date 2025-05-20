import React from "react";

const Child = ({ todos, addTodo }) => {
  console.log("Child re-rendered ");
  return (
    <div>
      Child
      {todos?.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};

export default React.memo(Child);
