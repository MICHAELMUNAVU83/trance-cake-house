import React from 'react'
import {useParams} from "react-router-dom"
import {cakes} from "../cakedatabase"


function OrderDetails() {
    const params = useParams()
    const orderedCakeImage = cakes.map(cake=>(
        cake.id=== Number(params.id) && 
        <div key={cake.id}>
           <img src={cake.image}  alt={cake.name}/>
        </div> 
    ))
    const orderedCakeTitle = cakes.map(cake=>(
        cake.id=== Number(params.id) && 
        <div key={cake.id}>
           <h3>{cake.name}</h3>
           <h3>{cake.type}</h3>
        </div> 
    ))
    const orderedCakePrices = cakes.map(cake=>(
        cake.id=== Number(params.id) && 
        <div key={cake.id}>
           <ul>
              <li>{cake.half_kg}</li>
              <li>{cake.one_kg}</li>
              <li> {cake.two_kg}</li>
              <li>{cake.three_kg}</li>
              <li>{cake.four_kg}</li>
           </ul>
        </div> 
    ))


    
  return (
    <div>
        {orderedCakeImage}
        {orderedCakeTitle}
        {orderedCakePrices}
       
    </div>
  )
}

export default OrderDetails