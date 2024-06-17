import React from "react";

import "./index.css";
import "./Testimonials.css";

import profile1 from "./assets/Images/Testimonial/profile1.jpg";
import profile2 from "./assets/Images/Testimonial/profile2.png";
import profile3 from "./assets/Images/Testimonial/profile3.jpg";
import profile4 from "./assets/Images/Testimonial/profile4.jpg";

import Footer from "./components/Footer";

function Testimonials() {
  return (
    <>
      <div className="testimonials--container">
        <h1 className="main--heading">Testimonials</h1>

        <div className="testimonials--details--container poppins-regular">
          <p className="poppins-semibold">What peoples said...</p>

          <div className="testimonial horizontal--flex center--elements">
            <img src={profile1} alt="profile" className="profile" />
            <div className="profile--details vertical--flex ">
              <p className="testimonial--text">
                Lorem ipsum dolor sit amet consectetur. Eu feugiat diam congue
                odio ut vitae et arcu. Malesuada.
              </p>
              <p className="username mofia">Mavoc YT</p>
            </div>
          </div>

          <div className="testimonial horizontal--flex center--elements">
            <img src={profile2} alt="profile" className="profile" />
            <div className="profile--details vertical--flex ">
              <p className="testimonial--text">
                Lorem ipsum dolor sit amet consectetur. Eu feugiat diam congue
                odio ut vitae et arcu. Malesuada.
              </p>
              <p className="username mofia">Michael Scott</p>
            </div>
          </div>

          <div className="testimonial horizontal--flex center--elements">
            <img src={profile3} alt="profile" className="profile" />
            <div className="profile--details vertical--flex ">
              <p className="testimonial--text">
                Lorem ipsum dolor sit amet consectetur. Eu feugiat diam congue
                odio ut vitae et arcu. Malesuada.
              </p>
              <p className="username mofia">Ryan Gosling</p>
            </div>
          </div>

          <div className="testimonial horizontal--flex center--elements">
            <img src={profile4} alt="profile" className="profile" />
            <div className="profile--details vertical--flex ">
              <p className="testimonial--text">
                Lorem ipsum dolor sit amet consectetur. Eu feugiat diam congue
                odio ut vitae et arcu. Malesuada.
              </p>
              <p className="username mofia">Vijay</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Testimonials;
