import React from "react";
import logos from "../images/logo1.png";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
function Footer() {
  return (
    <footer>
      <div>
        <img src={logos} alt="logo" />
      </div>
      <div className="links-to-cakes">
        <a href="#classic-cakes-div">Classic Cakes</a>
        <a href="#fruity-cakes-div">Fruity Cakes</a>
        <a href="#chocolate-cakes-div">Chocolate Cakes</a>
        <a href="#forests-cakes-div">Forest Cakes</a>
      </div>
      <div className="social-media-icons">
        <a
          
          rel="noopener noreferrer"
          href="tel:0790841979"
        >
          <FiPhoneCall/>  {" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/MichaelTrance1"
        >
          <AiOutlineTwitter />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/trance.07?igshid=YmMyMTA2M2Y="
        >
          <AiOutlineInstagram />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: michaelmunavu83@gmail.com"
        >
          <HiOutlineMailOpen />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/254740769596"
        >
          <FaWhatsapp />{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
