import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <nav>
      <span className="nav-logo">Didis house</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/saved">Saved</Link>
        <Link to="/about">About</Link>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`}>
        <div className="bar" onClick={()=>setIsOpen(!isOpen)}></div>
      </div>
    </nav>
  );
}

export default Navbar;
