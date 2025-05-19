import React, { Suspense, useState } from "react";
import "./App.css";
import MemoizedComponent from "./components/MemoizedComponent";
import Content from "./components/Content";
const LazyImage = React.lazy(() => import("./components/LazyLoadComponent"));
// import LazyLoadComponent from "./components/LazyLoadComponent.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [showImage, setShowImage] = useState(false);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Click Me!</button>
      <p>Count is {count}</p>
      <MemoizedComponent num={num} />
      <button onClick={() => setNum((num) => num + 1)}>Increment Num!</button>
      <Content />
      <button onClick={() => setShowImage((value) => !value)}>ShowImage</button>
      <Suspense fallback={<h1>Loading...</h1>}>
      {showImage && <LazyImage />}
      {/* {showImage && <LazyLoadComponent />} */}
      </Suspense>
    </>
  );
}

export default App;
