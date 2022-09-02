import React from "react";
import { Link } from "react-router-dom";
import {logos} from "../cakedatabase"
function Navbar() {
  
  return (
    <nav>
      
     
     
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <img className="logo-image" src={logos[0]} alt="u" />
        <Link to="/saved">Saved</Link>
        <Link to="/about">About</Link>
      
    </nav>
  );
}

export default Navbar;
