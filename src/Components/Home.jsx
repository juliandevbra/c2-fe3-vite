import { useEffect, useState } from "react";
import { pizzas } from "../utils/pizzas";
import Card from "./Card";
import axios from "axios";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);
  console.log(cart);
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
    <>
      {/* <div>
        <h2>Pedidos</h2>
        <ul>
          {cart.map((pedido) => (
            <li key={pedido.id}>{pedido.tipo}</li>
          ))}
        </ul>
      </div> */}

      <h1 style={titleStyles}>Lista de pizzas</h1>
      <div className="list-container">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
};

export default Home;
