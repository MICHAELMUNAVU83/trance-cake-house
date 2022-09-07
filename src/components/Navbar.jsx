import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";
import logos from "../images/logo1.png"
import "../Navbar.css";
function Navbar() {
  
  const [click, setClick] = useState(false);
  const handleClicked = () => {
    setClick(!click);
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink className="nav-logo" to="/">
          <img src={logos} alt="logos" />
        </NavLink>
        <div className={click ? "nav-menu active " : "nav-menu"}>
          <NavLink
            className="nav-links"
            onClick={handleClicked}
            activeClassName="active"
            to="/order"
          >
            Order
          </NavLink>

          <NavLink
            to="/saved"
            onClick={handleClicked}
            activeClassName="active"
            className="nav-links"
          >
            {" "}
            Cart <BsCartCheckFill /> 
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={handleClicked}
            activeClassName="active"
            className="nav-links"
          >
            {" "}
           Gallery
          </NavLink> 

          <NavLink
            className="nav-links"
            onClick={handleClicked}
            activeClassName="active"
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div onClick={handleClicked} className="nav-icon">
          <i>{click ? <FaTimes /> : <FaBars />}</i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
