import React, { useContext } from "react";
import lobo from "./lobo.png";
import { SalarioStates, useSalarioStates } from "./Context";
const LoboEstepario = () => {
  // const { salario } = useSalarioStates();
  const { salario } = useContext(SalarioStates);
  return (
    <div className="lobo-estepario">
      <img className="lobo" src={lobo} alt="lobo" />
      <h3>Total: {salario * 6}</h3>
      {console.log("Se renderizó el lobo")}
    </div>
  );
};

export default LoboEstepario;
