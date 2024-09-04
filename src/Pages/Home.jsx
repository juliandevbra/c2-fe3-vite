import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useRecipeStates } from "../Context/Context";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const { state } = useRecipeStates();
  return (
    <>
      <h1 style={titleStyles}>Lista de recetas</h1>
      <div className="list-container">
        {state.recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Home;
