import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withErrorBoundary from "../HOC/withErrorBoundary";

const Detail = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
        setTimeout(() => {
          setLoading(false);
          toast("Receta obtenida!", {
            theme: "light",
            draggable: true,
          });
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al traer la receta!",
          footer: err,
        });
      });
  }, []);

  return (
    <div>
      {loading ? (
        "Hagamos de cuenta que soy un spinner..."
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt="" />
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </>
      )}
    </div>
  );
};
const DetailWithError = withErrorBoundary(Detail);
export default DetailWithError;
