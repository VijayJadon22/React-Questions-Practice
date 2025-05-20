import React, { Suspense, useMemo, useState } from "react";
import "./App.css";
import MemoizedComponent from "./components/MemoizedComponent.jsx";
import Content from "./components/Content.jsx";
const LazyImage = React.lazy(() => import("./components/LazyLoadComponent.jsx"));
// import LazyLoadComponent from "./components/LazyLoadComponent.jsx";
import data from "./data.js";

function App2() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  // const [showImage, setShowImage] = useState(false);

  const findTrue = useMemo(() => {
    console.log("Calculating Function");
    return data.find((item) => item.value === true);
  }, [num]);
  const trueObj = findTrue;

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Click Me!</button>
      <button onClick={() => setNum((num) => num + 1)}>Increment Num!</button>
      {/* <p>Count is {count}</p>
      <MemoizedComponent num={num} />
      <Content />
      <button onClick={() => setShowImage((value) => !value)}>ShowImage</button>
      <Suspense fallback={<h1>Loading...</h1>}>
      {showImage && <LazyImage />}
      {/* {showImage && <LazyLoadComponent />} */}
      {/* </Suspense >  */}
      <p>
        value:{trueObj.list} + {trueObj.index}
      </p>
    </>
  );
}

export default App2;
