import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [theme, setTheme] = useState(false);
  const [count, setCount] = useState(0);
  const doubleCount = useMemo(() => {
    return loadingFunction(count);
  }, [count]);
  const themeStyle = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  console.log(count);
  console.log(theme);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h2>{count}</h2>
      <div style={themeStyle}>{doubleCount}</div>
      <button onClick={() => setTheme(!theme)}>
        Cambiar a {theme ? "🌞" : "🌚"}
      </button>
    </>
  );
};

export default UseMemo;

const loadingFunction = (n) => {
  for (let i = 0; i < 1000000000; i++) {}
  return n * 2;
};
