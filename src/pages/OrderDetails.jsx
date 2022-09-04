import React, { useState, useContext , useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { cakes } from "../cakedatabase";
import { RoomContext } from "../context";

function OrderDetails() {
  const params = useParams();
  const { addCart } = useContext(RoomContext);
  const { filteredUnique } = useContext(RoomContext);
  const [customerNumber , SetCustomerNumber]= useState("")
  const [size, setSize] = useState("");
  const addToCartEvent =(cake)=>{
    addCart(cake)
   
  }
  const [totalPrice, setTotalPrice] = useState("");
 
  useEffect(()=>{
    filteredUnique()
   
  })

  const [numberofCakes, setNumberofCakes] = useState("");
  const price = Number(size) * Number(numberofCakes);
 
  const selectSize = (e) => {
    setSize(e.target.value);
  };
  const selectCakeNumber = (e) => {
    setNumberofCakes(e.target.value);
  };
  const postCheckout = () => {
    if(size==="" && numberofCakes==="" ){
      alert("please select a size and number of cakes you want")
    }
    else if (size==="" && numberofCakes!==""){
      alert("please select the number  of cakes you want")
    }
    else if (size !== "" && numberofCakes===""){
      alert("please select the size you want")
    }
    else{
      setTotalPrice(price);

    }
  
  };

  const orderedCakeImage = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div key={cake.id}>
          <img
            className="ordered-cake-image"
            src={cake.image}
            alt={cake.name}
          />
        </div>
      )
  );
  const orderedCakeTitle = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div key={cake.id}>
          <h3>Name :{cake.name}</h3>
          <h3>Type : {cake.type}</h3>
        </div>
      )
  );
  const orderedCakePrices = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div key={cake.id}>
          <h3>Prices</h3>
          <ul>
            <li> Half Kg :{cake.half_kg}</li>
            <li> One Kg :{cake.one_kg}</li>
            <li>Two kg: {cake.two_kg}</li>
            <li> Three kg:{cake.three_kg}</li>
            <li> Four Kg:{cake.four_kg}</li>
          </ul>
        </div>
      )
  );
  // eslint-disable-next-line
  const orderedCakeIngridients = cakes.map((cake) => {
    if (cake.id === Number(params.id) && cake.eggs && cake.milk) {
      return (
        <div key={cake.id}>
          <p>has eggs</p>
          <p>has milk</p>
        </div>
      );
    } else if (cake.id === Number(params.id) && !cake.eggs && cake.milk) {
      return (
        <div key={cake.id}>
          <p>has no eggs</p>
          <p>has milk</p>
        </div>
      );
    } else if (cake.id === Number(params.id) && cake.eggs && !cake.milk) {
      return (
        <div key={cake.id}>
          <p>has eggs</p>
          <p>has no milk</p>
        </div>
      );
    } else if (cake.id === Number(params.id) && !cake.eggs && !cake.milk) {
      return (
        <div key={cake.id}>
          <p>has no eggs</p>
          <p>has no milk</p>
        </div>
      );
    }
  });

  const pickFlavour = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div key={cake.id}>
          <label htmlFor="size-selector">Select a size:</label>
          <select
            onChange={selectSize}
            value={size}
            name="size-selector"
            id="size-selector"
          >
            <option value="">Select a size</option>
            <option value={cake.half_kg}>
              Half kg at {cake.half_kg.toLocaleString()} Ksh
            </option>
            <option value={cake.one_kg}>
              One kg at {cake.one_kg.toLocaleString()} Ksh
            </option>
            <option value={cake.two_kg}>
              Two kgs at {cake.two_kg.toLocaleString()} Ksh
            </option>
            <option value={cake.three_kg}>
              Three kgs at {cake.three_kg.toLocaleString()} Ksh
            </option>
            <option value={cake.four_kg}>
              Four kgs at {cake.four_kg.toLocaleString()} Ksh
            </option>
          </select>
        </div>
      )
  );
  const pickNumber = (
    <div>
      Select number of cakes{" "}
      <input value={numberofCakes} type="number" onChange={selectCakeNumber} />
    </div>
  );
  const checkoutButton = (
    <div>
      <button onClick={postCheckout}> Checkout</button>
    </div>
  );

  const displayTotalPrice =
    totalPrice !== "" &&
    size !== "" &&
    cakes.map(
      (cake) =>
        cake.id === Number(params.id) && (
          <div key={cake.id}>
            The total amount payable for {numberofCakes} {cake.name} cake(s) is{" "}
            {totalPrice.toLocaleString()} Ksh
          </div>
        )
    );
   
  const addToCartButton = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <button
          onClick={()=>{
            addToCartEvent(cake)
          }}
        >
         ADD TO CART
        </button>
      )
  );
  const customerForm = <div>
    <input onChange={(e)=>{
      SetCustomerNumber(e.target.value)
    }} placeholder="enter your  number"  />

    <button onClick={()=>{
      sendToWhatsapp(customerNumber)
    }} key="1">SEND ORDER</button>

  </div>
  const sendToWhatsapp = (orderDetails) => {
    const whatsAppLink = `https://api.whatsapp.com/send?phone=254796230862&text=%20${orderDetails}`;
    window.open(whatsAppLink, "_blank");
  };
 

  return (
    <div>
      <div className="order-details-div">
        <Link to="/order">BACK BUTTON</Link>
        <div className="order-details-image">{orderedCakeImage}</div>
        <div className="order-details-info">
          {orderedCakeTitle}
          {orderedCakePrices}
          {orderedCakeIngridients}
        </div>
      </div>
      {pickFlavour}
      {pickNumber}
      {checkoutButton}
      {displayTotalPrice}
      {addToCartButton}
      {customerForm}
    </div>
  );
}

export default OrderDetails;
