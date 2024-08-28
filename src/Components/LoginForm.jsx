const LoginForm = ({ handleClick }) => {
  return (
    <div>
      <h1
      //   style={{ display: "none" }}
      >
        Debe ingresar
      </h1>
      <input type="email" role="email" />
      <input type="password" data-testid="password" />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default LoginForm;
