import Button from "../Components/Button";
import Form from "../Components/Form";
import withErrorBoundary from "../HOC/withErrorBoundary";

const Contacto = () => {
  return (
    <>
      <h4>Hacenos tu consulta:</h4>
      <Form />
    </>
  );
};
const ContactoWithError = withErrorBoundary(Contacto);
export default ContactoWithError;
