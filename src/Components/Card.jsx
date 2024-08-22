import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ recipe, cart, setCart }) => {
  const { image, title, pricePerServing } = recipe;
  return (
    <div className={CardStyles.cardContainer}>
      <img src={image} alt="" className={CardStyles.cardImg} />
      <h3>{title}</h3>
      <h4>${pricePerServing}</h4>
      <Counter />
      <Button onClick={() => setCart([...cart, recipe])}>🛒</Button>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Card;
