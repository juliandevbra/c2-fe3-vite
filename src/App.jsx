import "./Styles/App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import DogFetch from "./Components/DogFetch";
import CatAxios from "./Components/CatAxios";

function App() {
  return (
    <>
      {/* <DogFetch />
      <CatAxios /> */}
      <Navbar />
      <Form />
      <Home />
    </>
  );
}

export default App;
