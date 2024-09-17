import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { routes } from "./utils/routes";
import Detail from "./Pages/Detail";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import UseMemo from "./Components/UseMemo";

function App() {
  return (
    <>
      <UseMemo />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contacto />} />
          <Route path={routes.cart} element={<Cart />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route
            path={routes.notFound}
            element={<h1>Error 404 - Page not Found</h1>}
          />
        </Route>
      </Routes>
      <ToastContainer /> */}
    </>
  );
}

export default App;
