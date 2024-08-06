import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  //   let contador = 0;
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    // counter++ ❌ No es posible
    // counter = counter + 1 En vez de reasignar así
    setCounter(counter + 1); // ✅ Se "reasigna" de esta forma
    console.log(counter);
  };
  const restar = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  return (
    <div>
      <Button onClick={restar}>-</Button>
      <h4>{counter}</h4>
      <Button onClick={sumar}>+</Button>
    </div>
  );
};

export default Counter;
