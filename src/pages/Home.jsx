import React from 'react'
import {cakes} from "../cakedatabase"

function Home() {
  const displayCakesHome=cakes.map(cake=>(
    <div className="each-cake-div" key={cake.id}>
      <img className="each-cake-image" src={cake.image} alt="cake" />
      <p className="each-cake-name">{cake.name}</p>
    </div>
  ))
  return (
    <div className="home-div">
      <div className="quote-div">
        <p>For goodness sake, eat some cake!</p>
        <p>--vananenae</p>
      </div>
      <div className="all-cakes-home-div">
      {displayCakesHome}

      </div>
  
    </div>
  )
}

export default Home