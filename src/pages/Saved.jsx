import React, { useContext, useEffect } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

function Saved() {
  const { removeFromArray } = useContext(RoomContext);
  const { filteredUnique } = useContext(RoomContext);
  const { filtered } = useContext(RoomContext);  
 
  useEffect(() => {
    filteredUnique();
    // eslint-disable-next-line
  });

  if (filtered.length === 0) {
    return (
      <div key="no-cakes">
        <div>
          <h3>
            NO CAKES SAVED YET..HAVE A LOOK AT OUR AMAZNG CAKES AND SAVE A FEW
          </h3>
        </div>
        <Link to="/order"> Our amazing cakes</Link>
      </div>
    );
  } else {
    return (
      <div className="all-cakes-order-div">
        {filtered.map((cake) => (
          <div className="each-ordered-cake-div" key={cake.id}>
            <img className="each-cake-image" src={cake.image} alt="cake" />
            <p className="each-cake-name">{cake.name}</p>
            <Link  to={`/order/${cake.id}`}>
            <p className="each-cake-name">see more</p>
            </Link>

            <button
              onClick={() => {
                removeFromArray(cake.id);
              }}
            >
              Remove From Cart

            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Saved;
