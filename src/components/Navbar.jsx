import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopEasy</Link>
    </nav>
  );
};

export default Navbar;