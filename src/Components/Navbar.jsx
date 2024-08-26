import { Link, useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
      <Link to={routes.cart}>
        <h4>Cart</h4>
      </Link>
    </nav>
  );
};
export default Navbar;
