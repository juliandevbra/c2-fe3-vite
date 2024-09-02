import React, { useState } from "react";
import { useSalarioStates } from "./Context";

const ChildComponent = () => {
  const { salario, setSalario } = useSalarioStates();
  return (
    <div className="child">
      <h3>ChildComponent</h3>
      <p>Cuanto ganas por semestre?</p>
      <h3>Total: {salario * 6} </h3>
      <button onClick={() => setSalario(salario + 100000)}>
        Aumentar salario
      </button>
      {console.log("Se renderizó el hijo")}
    </div>
  );
};

export default ChildComponent;
