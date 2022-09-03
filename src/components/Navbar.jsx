import React , {useContext} from "react";
import { Link } from "react-router-dom";
import {logos} from "../cakedatabase"

import {RoomContext} from "../context"
function Navbar() {
  const { filtered} = useContext(RoomContext)
  const likesCount = (filtered.length>0 && <span>{filtered.length}</span>)
  return (
    
    <nav>
      
     
     
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <img className="logo-image" src={logos[0]} alt="u" />
        <Link to="/saved">Saved {likesCount}</Link>
        <Link to="/about">About</Link>
      
    </nav>
  );
}

export default Navbar;
