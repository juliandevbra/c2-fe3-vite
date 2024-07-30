import "./App.css";
import Card from "./Components/Card";
import Contacto from "./Components/Contacto";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <h1>Bienvenidos a Vite</h1>
      <Card nombre={"Claudia"} email="clau98@gmail.com" />
      <Card nombre={"David"} email="davidelmejor@yahoo.com" />
      <Card nombre={"Ingrid"} email="ingrid_mv@hotmail.com" />

      <Contacto />
    </>
  );
}

export default App;
