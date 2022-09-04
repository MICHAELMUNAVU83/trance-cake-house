import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { cakes } from "../cakedatabase";
import { RoomContext } from "../context";

function OrderDetails() {
  const params = useParams();
  const { addCart } = useContext(RoomContext);
  const [cakeName , setCakeName] = useState("")
  const { filteredUnique } = useContext(RoomContext);
  const [customerNumber, setCustomerNumber] = useState("");
  const [size, setSize] = useState("");
  const addToCartEvent = (cake) => {
    addCart(cake);
  };
  const [totalPrice, setTotalPrice] = useState("");

 
  const [numberofCakes, setNumberofCakes] = useState("");
  const price = Number(size) * Number(numberofCakes);

  // useEffect(() => {
  //   filteredUnique();
  // });



  const selectSize = (e) => {
    setSize(e.target.value);
  };
  const selectCakeNumber = (e) => {
    setNumberofCakes(e.target.value);
  };
  const postCheckout = () => {
    if (size === "" && numberofCakes === "") {
      alert("please select a size and number of cakes you want");
    } else if (size === "" && numberofCakes !== "") {
      alert("please select the number  of cakes you want");
    } else if (size !== "" && numberofCakes === "") {
      alert("please select the size you want");
    } else {
      setTotalPrice(price);
    }
  };

  const orderedCakeImage1 = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <img key={cake.id} src={cake.more_images[0]} alt={cake.name} />
      )
  );
  const orderedCakeImage2 = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <img key={cake.id} src={cake.more_images[1]} alt={cake.name} />
      )
  );
  const orderedCakeTitle = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div className="ordered-cake-title" key={cake.id}>
          <div>
            <span className="key-of-cake">Name :</span>{" "}
            <span className="value-of-cake">{cake.name} </span>
          </div>
          <div>
            <span className="key-of-cake">Type :</span>{" "}
            <span className="value-of-cake">{cake.type} </span>
          </div>
        </div>
      )
  );
  const orderedCakePrices = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div className="ordered-cake-prices" key={cake.id}>
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
        <div className="ordered-cake-ingredients" key={cake.id}>
          <h3>Ingredients</h3>
          <p>has eggs</p>
          <p>has milk</p>
        </div>
      );
    } else if (cake.id === Number(params.id) && !cake.eggs && cake.milk) {
      return (
        <div className="ordered-cake-ingredients" key={cake.id}>
          <h3>Ingredients</h3>
          <p>has no eggs</p>
          <p>has milk</p>
        </div>
      );
    } else if (cake.id === Number(params.id) && cake.eggs && !cake.milk) {
      return (
        <div className="ordered-cake-ingredients" key={cake.id}>
          <h3>Ingredients</h3>
          <p>has eggs</p>
          <p>has no milk</p>
        </div>
      );
    } else if (cake.id === Number(params.id) && !cake.eggs && !cake.milk) {
      return (
        <div className="ordered-cake-ingredients" key={cake.id}>
          <h3>Ingredients</h3>
          <p>has no eggs</p>
          <p>has no milk</p>
        </div>
      );
    }
  });

  const pickFlavour = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div className="pick-size" key={cake.id}>
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

  const pickNumber = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div key={cake.id} className="pick-number">
          <span>Select number of cakes : </span>
          <input
            value={numberofCakes}
            type="number"
            placeholder="number of cakes"
            onChange={selectCakeNumber}
          />
        </div>
      )
  );

  const checkoutButton = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div key={cake.id}>
          <button
            onClick={() => {
              postCheckout();
              console.log(customerNumber);
              setCakeName(cake.name)
              console.log(cake.name)
              sendToWhatsapp(cake.name)
            }}
          >
            {" "}
            Checkout
          </button>
        </div>
      )
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
          className="add-to-cart-btn"
          key={cake.id}
          onClick={() => {
            addToCartEvent(cake);
          }}
        >
          ADD TO CART
        </button>
      )
  );
  const customerNumberForm = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <div>
          <span>Input your number</span>
          <input
            type="number"
            onChange={(e) => {
              setCustomerNumber(e.target.value);
            }}
          />
        </div>
      )
  );
  const sendToWhatsapp = (orderDetails) => {
    const whatsAppLink = `https://api.whatsapp.com/send?phone=254790841979&text=%20${orderDetails}`;
    window.open(whatsAppLink, "_blank");
  };
  const selectSizeAndNumber = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <h3 className="select-size-number-btn" key={cake.id}>
          FILL THE FORM BELOW TO COMPLETE YOUR ORDER
        </h3>
      )
  );
 
  
 
 

  return (
    <div>
      <div className="order-first-div">
        <div className="order-details-image1">{orderedCakeImage1}</div>
        <div className="order-details-image2">{orderedCakeImage2}</div>
        <div className="order-details-info">
          {orderedCakeTitle}
          {orderedCakePrices}
          {orderedCakeIngridients}
        </div>
      </div>
      {addToCartButton}
      {selectSizeAndNumber}
      {pickFlavour}
      {pickNumber}
      {customerNumberForm}
      {checkoutButton}
      {displayTotalPrice}
    </div>
  );
}

export default OrderDetails;
