import React, { useContext , useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { FaTimes ,FaBars } from "react-icons/fa";
import { RoomContext } from "../context";
import "../Navbar.css";
function Navbar() {
  const { filtered } = useContext(RoomContext);
  const likesCount = filtered.length > 0 && <span>{filtered.length}</span>;
  const [click, setClick] = useState(false)
  const handleClicked = ()=>{
    setClick(!click)
  }
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink className="nav-logo" to="/">
          Home
        </NavLink>
        <div className={click? "nav-menu active ":  "nav-menu"}>
          <NavLink className="nav-links" onClick={handleClicked} activeClassName="active" to="/order">
            Order
          </NavLink>

          <NavLink to="/saved"  onClick={handleClicked}  activeClassName="active" className="nav-links">
            {" "}
            <BsCartCheckFill /> {likesCount}
          </NavLink>

          <NavLink className="nav-links"  onClick={handleClicked}  activeClassName="active" to="/about">
            About
          </NavLink>
        </div>
        <div onClick={handleClicked} className="nav-icon">
          <i >
           {click ?  < FaTimes/> :  < FaBars/>}
          </i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
