import React from "react";

import "./index.css";
import "./Archives.css";

import archive1 from "./assets/Images/Archive/archive1.jpeg";
import archive2 from "./assets/Images/Archive/archive2.jpeg";
import archive3 from "./assets/Images/Archive/archive3.jpeg";

import Footer from "./components/Footer";

function Archives() {
  return (
    <>
      <div className="archives--container">
        <h1 className="mofia">Archives</h1>

        <div className="archive--images--container vertical--flex">
          <p className="poppins-semibold">My Diary Archives</p>

          <div className="archive--images horizontal--flex">
            <img src={archive1} alt="archive" />
            <img src={archive2} alt="archive" />
            <img src={archive3} alt="archive" />
            <img src={archive1} alt="archive" />
            <img src={archive2} alt="archive" />
            <img src={archive3} alt="archive" />
            <img src={archive2} alt="archive" />
            <img src={archive3} alt="archive" />
            <img src={archive1} alt="archive" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Archives;
