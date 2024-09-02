import { createContext, useContext, useState } from "react";

export const SalarioStates = createContext();

const Context = ({ children }) => {
  const [salario, setSalario] = useState(1600000);

  return (
    <SalarioStates.Provider value={{ salario, setSalario }}>
      {children}
    </SalarioStates.Provider>
  );
};
export default Context;

export const useSalarioStates = () => useContext(SalarioStates);
