import { useState } from "react";
import "./App.css";
import MemoizedComponent from "./components/MemoizedComponent";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Click Me!</button>
      <p>Count is {count}</p>
      <MemoizedComponent num={num} />
      <button onClick={() => setNum((num) => num + 1)}>Increment Num!</button>
    </>
  );
}

export default App;
