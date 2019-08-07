import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <Link className="brand_logo" to="/">
        Shopping Cart
      </Link>
      <ul className="right">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">My cart</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
