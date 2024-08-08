import { useState } from "react";
import Message from "./Message";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [address, setAddress] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
  });
  console.log(customer);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    // console.log(event.target.value);
    setCustomer({ ...customer, name: event.target.value });
  };

  const handleChangeAddress = (event) => {
    // console.log(event.target.value);
    setCustomer({ ...customer, address: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numRegex = /[0-9]/;
    console.log(numRegex.test(customer.address));
    if (
      customer.name.trim().length > 3 &&
      customer.address.trim().includes(" ") &&
      numRegex.test(customer.address)
    ) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
    }
  };

  const reset = () => {
    setCustomer({
      name: "",
      address: "",
    });
  };

  return (
    <>
      {/* {condicion ? resultado true : resultado false} */}

      {show ? (
        <Message customer={customer} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input
              type="text"
              value={customer.name}
              onChange={handleChangeName}
            />
            <label>Direccion: </label>
            <input
              type="text"
              value={customer.address}
              onChange={handleChangeAddress}
            />
            <button>Enviar</button>
          </form>

          <button onClick={reset}>Reset form</button>
        </>
      )}

      {error && (
        <h4 style={{ color: "red" }}>Por favor, verifique su información</h4>
      )}
    </>
  );
};

export default Form;
