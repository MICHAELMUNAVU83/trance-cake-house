import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { cakes } from "../cakedatabase";

function Order() {
  const [flavor, setFlavor] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    
  const flavorSelector = (
    <div className="flavour-select">
      <span>
        Select the Flavour you want to Order : 
      </span>
      <span>
       {"  "}
      </span>

       <select
      name="Flavor"
      value={flavor}
      onChange={(e) => {
        setFlavor(e.target.value);
      }}
      key="flavor selector"
      id="cars"
    >
    
      <option value="">All Flavours</option>
      <option value="classic">Classic Flavours</option>
      <option value="Forests">Forest Flavoured Cakes</option>
      <option value="Fruity">Fruity Flavoured Cakes</option>
      <option value="Chocolate">Chocolate Flavoured Flavors</option>
    </select>

    </div>
   
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
      
      {flavorSelector}
      <div className="all-cakes-order-div">{displayCakes}</div>
    </div>
  );
}

export default Order;
