import React from "react";
import { Link } from "react-router-dom";
import { cakes } from "../cakedatabase";

function Order() {
  const displayCakesHome = cakes.map((cake) => (
    <Link
      key={cake.id}
      className="each-ordered-cake-div"
      to={`/order/${cake.id}`}
    >
      <img className="each-cake-image" src={cake.image} alt="cake" />
      
      <p className="each-cake-name">{cake.name}</p>
    </Link>
  ));
  return (
    <div>
      Click on the cake you would love to order
      <div className="all-cakes-order-div">{displayCakesHome}</div>
    </div>
  );
}

export default Order;
