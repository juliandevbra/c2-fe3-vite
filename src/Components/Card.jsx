import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { useRecipeStates } from "../Context/Context";
import { toast } from "react-toastify";

const Card = ({ recipe }) => {
  const { id, image, title, pricePerServing } = recipe;
  const { dispatch } = useRecipeStates();
  const addCart = () => {
    dispatch({ type: "ADD_CART", payload: recipe });
    toast.success("Agregado al carrito");
  };
  return (
    <div className={CardStyles.cardContainer}>
      <img src={image} alt="" className={CardStyles.cardImg} />
      <h3>{title}</h3>
      <h4>${pricePerServing}</h4>
      <Counter />
      {/* <Button onClick={() => setCart((prev) => [...prev, recipe])}> */}
      <Button onClick={addCart}>🛒</Button>
      <Link to={"/detail/" + id}>
        <Button>Ver detalle</Button>
      </Link>
    </div>
  );
};

export default Card;
