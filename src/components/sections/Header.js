import React from "react";
import NavBar from "./NavBar";

function Header({ title, tagLine }) {
  return (
    <header className="container-fluid bg-dark text-white" id="hero">
      <div className="center-text">
        <h1>{title}</h1>
        <h3>{tagLine}</h3>
      </div>
    </header>
  );
}

export default Header;
