import React from "react";
import { useRecipeStates } from "../Context/Context";
import Card from "../Components/Card";

const Cart = () => {
  const { cart } = useRecipeStates();
  return (
    <div>
      {cart.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Cart;
