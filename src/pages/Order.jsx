import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cakes } from "../cakedatabase";

function Order() {
  const [flavor, setFlavor] = useState("");
  const flavorSelector = (
    <select
      name="cars"
      value={flavor}
      onChange={(e) => {
        setFlavor(e.target.value);
      }}
      key="flavor selector"
      id="cars"
    >
      <option value="">All Flavors</option>
      <option value="classic">Classics</option>
      <option value="Forests">Forest Cakes</option>
      <option value="Fruity">Fruity Cakes</option>
      <option value="Chocolate">Chocolate Flavors</option>
    </select>
  );
  // eslint-disable-next-line
  const displayCakes = cakes.map((cake) => {
    if (cake.type === flavor) {
      return (
        <Link
          key={cake.id}
          className="each-ordered-cake-div"
          to={`/order/${cake.id}`}
        >
          <img className="each-cake-image" src={cake.more_images[1]} alt="cake" />

          <p className="each-cake-name">{cake.name}</p>
        </Link>
      );
    } else if (flavor === "") {
      return (
        <Link
          key={cake.id}
          className="each-ordered-cake-div"
          to={`/order/${cake.id}`}
        >
          <img className="each-cake-image" src={cake.more_images[1]} alt="cake" />

          <p className="each-cake-name">{cake.name}</p>
        </Link>
      );
    }
  });

  return (
    <div>
      Click on the cake you would love to order
      {flavorSelector}
      <div className="all-cakes-order-div">{displayCakes}</div>
    </div>
  );
}

export default Order;
