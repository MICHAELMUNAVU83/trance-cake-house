import React from "react";
import { MdCopyright } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
function Footer() {
  return (
    <footer>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/michael-munavu/"
      >
        <AiFillLinkedin />{" "}
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
    </footer>
  );
}

export default Footer;
