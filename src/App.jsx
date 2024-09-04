import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { routes } from "./utils/routes";
import Detail from "./Pages/Detail";
import ReducerCount from "./Components/ReducerCount";

function App() {
  return (
    <>
      {/* <ReducerCount /> */}
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contacto />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path={routes.notFound}
          element={<h1>Error 404 - Page not Found</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
