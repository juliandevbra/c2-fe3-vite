import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context.jsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
