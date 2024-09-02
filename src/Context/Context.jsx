import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const RecipeStates = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const [recipes, setRecipes] = useState([]);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data.recipes);
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <RecipeStates.Provider value={{ cart, setCart, recipes }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => useContext(RecipeStates);
