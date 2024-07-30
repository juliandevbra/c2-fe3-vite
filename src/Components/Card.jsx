import Button from "./Button";

const Card = ({ nombre, email }) => {
  // console.log(props);
  // const { nombre, email } = props;
  // console.log("nombre:", nombre);
  // console.log("email:", email);
  return (
    <div className="card">
      <img
        src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
        alt=""
        width={100}
      />
      <h4>Nombre: {nombre}</h4>
      <h4>Email: {email}</h4>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Card;
