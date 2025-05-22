import React from "react";
import useTheme from "./hooks/useTheme.js";

const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div>
      <h1>App</h1>
      <h2>Current Theme: {theme === "black" ? "Black" : "White"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
