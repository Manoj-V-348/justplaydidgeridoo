import React from "react";

import "../index.css";
import "./Footer.css";

import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer--container mofia center--elements vertical--flex">
        <h1>Contact</h1>

        <Link
          className="youtube--container horizontal--flex center--elements"
          to="https://www.youtube.com/"
          target="_blank"
        >
          <Icon icon="bi:youtube" width="16" height="16" />
          <p>JustPlayDidgeridoo</p>
        </Link>

        <Link
          className="instagram--container horizontal--flex center--elements"
          to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdBjhFmxTXXkKZPLdRxwcpKlMKxMtnRLlRdNkMslWvkrpvWwrsrgWbJlSMKMjJFXsNdxB"
          target="_blank"
        >
          <Icon icon="mdi:gmail" width="16" height="16" />
          <p>fullmoonstay@naver.com</p>
        </Link>
      </div>
      <div className="copyright center--elements">
        <p className=".poppins-regular">2024, Sarang-All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
