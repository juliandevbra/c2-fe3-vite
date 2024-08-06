export const useState = (valorInicial) => {
  let variable = valorInicial;

  function modificarVariable(valorNuevo) {
    variable = valorNuevo;
    //Además re-renderiza el componente que comprende dicho estado junto a sus hijos
  }

  return [variable, modificarVariable];
};
