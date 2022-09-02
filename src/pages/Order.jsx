import React from 'react'
import { Link  } from 'react-router-dom'
import {cakes} from "../cakedatabase"

function Order() {
  const displayCakesHome=cakes.map(cake=>(
    <div className="each-cake-div" key={cake.id}>
      <img className="each-cake-image" src={cake.image} alt="cake" />
      <p className="each-cake-name">{cake.name}</p>
      <Link to={`/order/${cake.id}`}>BOOK NOW</Link>
    </div>
  ))
  return (
    <div>Click on the cake you would love to order
       <div className="all-cakes-home-div">
      {displayCakesHome}

      </div>
    </div>
  )
}

export default Order