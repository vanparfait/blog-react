import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <a className="logo" href="yyS">
          NGUEMECHIA Blog
        </a>
      </div>
      <ul className="liens">
        <li>
          <a className="lien " href="#hh">
            Accueil
          </a>
        </li>
        <li>
          <a className="lien active" href="#m">
            Creer un Article
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
