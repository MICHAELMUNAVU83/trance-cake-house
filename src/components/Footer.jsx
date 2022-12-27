import React from "react";
import logos from "../images/logo2.png";

import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineInstagram  , AiOutlineTwitter} from "react-icons/ai";
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
        <a rel="noopener noreferrer" href="tel:0740769596">
          <FiPhoneCall /> 0740769596{" "}
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/MichaelTrance1"
        >
          <AiOutlineTwitter /> MichaelTrance1{" "}
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/trance.07?igshid=YmMyMTA2M2Y="
        >
          <AiOutlineInstagram /> trance.07{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: michaelmunavu83@gmail.com"
        >
          <HiOutlineMailOpen /> michaelmunavu83@gmail.com
        </a>
        
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/254796230862 "
        >
          <FaWhatsapp /> 0740769596
        </a>
      </div>
    </footer>
  );
}

export default Footer;
