import React from "react";

import "./index.css";
import "./Events.css";

import eventsCarousel from "./assets/Images/Events/events.jpeg";
import eventImg1 from "./assets/Images/Events/eventImg1.png";

import Footer from "./components/Footer.jsx";

function Events() {
  return (
    <>
      <div className="events--container">
        <div className="events--carousel center--elements vertical--flex">
          <img src={eventsCarousel} alt="Music" />
          <h1 className="main--heading center--text">Events</h1>
        </div>

        <div className="event--details--container poppins-regular">
          <h1 className="poppins-semibold">Upcoming Events</h1>

          <div className="event--details vertical--flex">
            <img src={eventImg1} alt="event1" />
            <div className="events--info vertical--flex">
              <p className="location">Location:lacus sit amet.</p>
              <p className="date">Sunday, May-16</p>
              <p className="time">6:00-8:00pm</p>
              <p className="event--description">
                Lorem ipsum dolor sit amet consectetur. Neque enim aenean lacus
                sit amet.
              </p>
              <a
                href="https://www.youtube.com/@JustPlayDidgeridoo"
                className="book--seats"
                target="_blank"
              >
                Book your Seats...
              </a>
            </div>
          </div>

          <div className="event--details vertical--flex">
            <img src={eventImg1} alt="event1" />
            <div className="events--info vertical--flex">
              <p className="location">Location:lacus sit amet.</p>
              <p className="date">Sunday, May-16</p>
              <p className="time">6:00-8:00pm</p>
              <p className="event--description">
                Lorem ipsum dolor sit amet consectetur. Neque enim aenean lacus
                sit amet.
              </p>
              <a
                href="https://www.youtube.com/@JustPlayDidgeridoo"
                className="book--seats"
                target="_blank"
              >
                Book your Seats...
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;
