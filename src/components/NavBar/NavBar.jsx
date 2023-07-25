import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link className="logo" to="/">
          NGUEMECHIA Blog
        </Link>
      </div>
      <ul className="liens">
        <li>
          <Link className="lien " to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="lien active" to="/ajout">
            Creer un Article
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
