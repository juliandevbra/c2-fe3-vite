import "./Styles/App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import LifeCycles from "./Components/LifeCycles";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && <LifeCycles />}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Desmontar" : "Montar"} Componente
      </button>

      {/* <Navbar />
      <Form />
      <Home /> */}
    </>
  );
}

export default App;
