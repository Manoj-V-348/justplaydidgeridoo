import React, { useState } from "react";

import { Icon } from "@iconify/react";

import Logo from "../assets/sarang-akka.jpg";

import { Link } from "react-router-dom";
import "../index.css";
import "./Header.css";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const [research, setResearch] = useState(false);

  function toggleNavbar() {
    setNavbar((prev) => {
      return !prev;
    });
  }

  function worksScroll() {
    var worksEl = document.getElementById("works");
    worksEl.scrollIntoView();
  }

  function journalScroll() {
    var journalEl = document.getElementById("journals");
    journalEl.scrollIntoView();
  }

  const styles = navbar
    ? { transform: "translateX(0)" }
    : { transform: "translateX(-110%)" };

  function toggleResearch() {
    setResearch((prev) => {
      return !prev;
    });
  }

  const researchStyles = research
    ? {
        transform: "translateY(2%)",
        opacity: "1",
      }
    : {
        transform: "translateY(-110%)",
        opacity: "0",
      };
  return (
    <>
      <header>
        <div className="header--left">
          {/* <Icon
          icon="game-icons:hamburger-menu"
          width="36"
          height="36"
          onClick={toggleNavbar}
          className="icon burger"
  /> */}
          <Icon
            icon="game-icons:hamburger-menu"
            width="36"
            height="36"
            onClick={toggleNavbar}
            className="icon burger"
          />
          <Link to="/">
            {/* <h1 className="main--heading">JustplayDidgeridoo</h1> */}
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          {/*   
            <Link to="/">
            <h1 className="main--heading">SARANG</h1>
            </Link>
          */}
        </div>

        <h1 className="main--heading desktop-heading">Just Play Didgerido</h1>
        <a href="https://cal.com/" className="poppins-semibold button">
          Book Now!
        </a>
        <div className="header--navbar" style={styles}>
          <Icon
            icon="material-symbols:close"
            width="24"
            height="24"
            onClick={toggleNavbar}
            className="icon"
          />

          <Link to="/" onClick={toggleNavbar}>
            <h2 className="main--heading poppins-medium">MEET SARANG</h2>
          </Link>

          <Link to="/research" onClick={toggleNavbar}>
            <div className="research--link--container">
              <h2
                className="main--heading poppins-medium"
                onClick={toggleResearch}
              >
                Research
              </h2>
              <Icon
                icon="bxs:down-arrow"
                width="10"
                height="10"
                onClick={toggleResearch}
              />
            </div>

            <div className="research--hover" style={researchStyles}>
              <p className="main--heading poppins-medium" onClick={worksScroll}>
                Works
              </p>
              <p
                className="main--heading poppins-medium"
                onClick={journalScroll}
              >
                Articles
              </p>
            </div>
          </Link>

          <Link to="/music" onClick={toggleNavbar}>
            <h2 className="main--heading poppins-medium">Music</h2>
          </Link>

          <Link to="/events" onClick={toggleNavbar}>
            <h2 className="main--heading poppins-medium">Events</h2>
          </Link>

          <Link to="/archives" onClick={toggleNavbar}>
            <h2 className="main--heading poppins-medium">Archives</h2>
          </Link>

          <Link to="/testimonials" onClick={toggleNavbar}>
            <h2 className="main--heading poppins-medium">Testimonials</h2>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
