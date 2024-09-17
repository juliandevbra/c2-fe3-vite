import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const RecipeStates = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART": //Lo dejo de tarea utilizar un .filter()
      return { ...state, cart: [] };
    default:
      throw new Error();
  }
};

const initialState = {
  recipes: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data.recipes);
        dispatch({ type: "GET_RECIPES", payload: res.data.recipes });
        toast("Lista obtenida!", {
          theme: "dark",
          draggable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al traer la lista!",
          footer: err,
        });
      });
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <RecipeStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => useContext(RecipeStates);
