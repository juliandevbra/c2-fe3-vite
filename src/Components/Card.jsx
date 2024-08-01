import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
console.log(CardStyles);
const Card = ({ recipe }) => {
  // console.log(recipe);
  const { img, tipo, precio } = recipe;
  return (
    <div className={CardStyles.cardContainer}>
      <img src={img} alt="" className={CardStyles.cardImg} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Card;
