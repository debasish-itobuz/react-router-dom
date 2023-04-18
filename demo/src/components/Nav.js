import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
    </div>
  );
}
