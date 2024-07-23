import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pacientes" className="nav-link">
            User Details
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/agenda" className="nav-link">
            Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;