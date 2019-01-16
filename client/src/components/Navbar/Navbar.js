import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const NavbarIcon = () => (
  <div>
 <img alt="Medicine cabinet" src="https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__pills_medicine_drugs_health-512.png" height="30px" width="40px"></img> 
      MedCabinet!
</div>
);

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <Link className="navbar-brand" to="/">
   <NavbarIcon/>
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Discover
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
        </li>
      </ul>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
);

export default Navbar;
