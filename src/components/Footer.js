import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram className="insta" />
        <FaTwitter className="twitter" />
        <FaFacebook className="facebook" />
        <FaLinkedin className="linkedin" />
      </div>
      <p> &copy; 2023 Elfangry.com </p>
    </div>
  );
}

export default Footer;
