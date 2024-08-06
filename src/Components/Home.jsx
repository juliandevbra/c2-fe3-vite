import { useState } from "react";
import { pizzas } from "../utils/pizzas";
import Card from "./Card";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <>
      <div>
        <h2>Pedidos</h2>
        <ul>
          {cart.map((pedido) => (
            <li key={pedido.id}>{pedido.tipo}</li>
          ))}
        </ul>
      </div>

      <h1 style={titleStyles}>Lista de pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} recipe={pizza} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
};

export default Home;
