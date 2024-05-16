import React, { useState } from "react";

import { Icon } from "@iconify/react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../index.css";
import "./Header.css";

function Header() {
  const [navbar, setNavbar] = useState(false);

  function toggleNavbar() {
    setNavbar((prev) => {
      return !prev;
    });
  }

  const styles = navbar
    ? { transform: "translateX(0)" }
    : { transform: "translateX(-100%)" };

  return (
    <header>
      <div className="header--left">
        <Icon
          icon="game-icons:hamburger-menu"
          width="24"
          height="24"
          onClick={toggleNavbar}
          className="icon"
        />
        <Link to="/">
          <h1 className="main--heading">JustplayDidgeridoo</h1>
        </Link>
      </div>
      <button className="poppins-semibold button">Book Now!</button>
      <div className="header--navbar" style={styles}>
        <Icon
          icon="material-symbols:close"
          width="24"
          height="24"
          onClick={toggleNavbar}
          className="icon"
        />
        <Link to="/" onClick={toggleNavbar}>
          <h2 className="main--heading poppins-medium">Home</h2>
        </Link>
        <Link to="/research" onClick={toggleNavbar}>
          <h2 className="main--heading poppins-medium">Research</h2>
        </Link>
        <Link to="/performance" onClick={toggleNavbar}>
          <h2 className="main--heading poppins-medium">Performance</h2>
        </Link>
        <Link to="/events" onClick={toggleNavbar}>
          <h2 className="main--heading poppins-medium">Events</h2>
        </Link>
        <Link to="/testimonials" onClick={toggleNavbar}>
          <h2 className="main--heading poppins-medium">Testimonials</h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
