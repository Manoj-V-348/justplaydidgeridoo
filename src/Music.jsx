import React from "react";

import "./index.css";
import "./Music.css";

import musicCarousel from "./assets/Images/Music/music.png";

import Footer from "./components/Footer.jsx";

function Music() {
  return (
    <>
      <div className="music--container">
        <div className="music--carousel center--elements vertical--flex">
          <img src={musicCarousel} alt="Music" />
          <h1 className="main--heading center--text">Music</h1>
        </div>

        <div className="performance--container poppins-regular vertical--flex">
          <h1 className="mofia">Performance</h1>
          <div className="youtube--details">
            <p className="youtube--channel--name">
              YouTube:{" "}
              <a
                href="https://www.youtube.com/@JustPlayDidgeridoo"
                target="_blank"
              >
                @JustPlayDidgeridoo
              </a>
            </p>
            <p className="youtube--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ad
              eveniet quasi, alias iure eligendi provident dolorum architecto
              culpa deserunt aperiam numquam voluptate vero dolor aut veritatis
              odio eaque temporibus.
            </p>

            <div className="youtube--video center--elements vertical--flex">
              <h2 className="poppins-semibold">Most Viewed:</h2>
              <iframe
                src="https://www.youtube.com/watch?v=z_vAUye3zOQ"
                className="video--link"
              ></iframe>
              <div className="youtube--video--description">
                <p className="poppins-semibold">Description:</p>
                <p className="description--text">
                  Hi, guys! This is Sound of Senegal which is my first
                  didgeridoo music video.
                  <br />
                  <br />
                  Copyright 2020. JINSARANG All rights reserved.
                </p>
              </div>
            </div>

            <div className="youtube--video center--elements vertical--flex">
              <h2 className="poppins-semibold">Live Performance:</h2>
              <iframe
                src="https://www.youtube.com/watch?v=Wx2JLxJdXLk"
                className="video--link"
              ></iframe>
              <div className="youtube--video--description">
                <p className="poppins-semibold">Description:</p>
                <p className="description--text">
                  The background of the performance is the Mapo Bridge in Seoul.
                  Mapo Bridge is a beautiful structure over the Han River in
                  Seoul, yet it's also a place with a high rate of suicide
                  attempts. The "Still, Live" project is an 'Unlined Music
                  Company' project aimed at helping those who are going through
                  dark and desperate times to find the meaning and reason in
                  life. We await the participation of artists from around the
                  world who believe in the healing power of music and art.
                  <br />
                  <br />
                  Copyright 2020. JINSARANG All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="center--elements youtube--subscribe--text">
          <a
            href="https://www.youtube.com/@JustPlayDidgeridoo"
            className="youtube--link mofia center--text"
            target="_blank"
          >
            Subscribe my Channel for further Updates
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Music;
