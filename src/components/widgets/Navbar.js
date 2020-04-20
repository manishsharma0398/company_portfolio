import React from "react";
import Logo from "../../assets/images/logo.png";

import { Link, useLocation } from "react-router-dom";

import "../../assets/styles/Navbar.css";

const Navbar = () => {
  const toggleNavbar = () => {
    document.querySelector(".navbar-nav").classList.toggle("show");
  };

  let location = useLocation();
  location = location.pathname.split("/");

  const getLocation = (loc) => (location[1] === loc ? " active" : "");

  const active =
    location[1] === "" ||
    (location[1] !== "contact" && location[1] !== "subsidiary") ||
    location.length < 2
      ? " active"
      : "";

  return (
    <div className="navbar">
      <div className="container">
        <ul className="menu">
          <li onClick={toggleNavbar} className="menu-item">
            Menu
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className={"nav-item" + active}>
            <Link to="/" className="nav-link">
              The R Group
            </Link>
          </li>
          <li className={"nav-item" + getLocation("header")}>
            <a href="#!" className="nav-link">
              Header2
            </a>
          </li>
          <li className={"nav-item" + getLocation("contact")}>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="navbar-brand">
          <Link to="/">
            <img src={Logo} alt="g" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
