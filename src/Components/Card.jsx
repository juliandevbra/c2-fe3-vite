import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ recipe, cart, setCart }) => {
  const { img, tipo, precio } = recipe;
  return (
    <div className={CardStyles.cardContainer}>
      <img src={img} alt="" className={CardStyles.cardImg} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
      <Counter />
      <Button onClick={() => setCart([...cart, recipe])}>🛒</Button>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Card;
