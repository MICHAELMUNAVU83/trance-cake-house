import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { cakes } from "../cakedatabase";
import { RoomContext } from "../context";
import emailjs from "@emailjs/browser";
import { GiCakeSlice } from 'react-icons/gi';
import { HiOutlineCake } from 'react-icons/hi';
import {TbCake} from 'react-icons/tb';
import { GiStairsCake } from 'react-icons/gi';
import { SiCakephp } from 'react-icons/si';

function OrderDetails() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8nuxsw3",
        "template_4ebr03g",
        form.current,
        "6M-rV1iiaVqa5DANh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const params = useParams();
  const { addCart } = useContext(RoomContext);
  const Swal = require("sweetalert2");
  const [kilo, setKilo] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [numberofCakes, setNumberofCakes] = useState("");
  const [size, setSize] = useState("");
  const [nameOfCustomer , setNameOfCustomer] = useState("")
  const [numberOfCustomer , setNumberOfCustomer] = useState("")

  const addToCartEvent = (cake) => {
    addCart(cake);
  };

  const price = Number(size) * Number(numberofCakes);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    


  const selectCakeNumber = (e) => {
    setNumberofCakes(e.target.value);
  };
  const postCheckout = () => {
    setTotalPrice(price);
    if (size !== "" && numberofCakes !== "" && numberOfCustomer!=="" && nameOfCustomer!=="") {
      Swal.fire({
        position: "top",
        icon: "success",
        title:
          "Your Order was Received , we will reach you shortly to confirm your order details",
        showConfirmButton: false,
        timer: 2000,
        width: "400px",
      });
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Fill the form completely and resubmit",
        showConfirmButton: false,
        timer: 5000,
        width: "400px",
      });
    }

    // eslint-disable-next-line
    cakes.map((cake) => {
      if (Number(size) === cake.half_kg) {
        setKilo("half kg");
      } else if (Number(size) === cake.one_kg) {
        setKilo("one kg");
      } else if (Number(size) === cake.two_kg) {
        setKilo("Two kgs");
      } else if (Number(size) === cake.three_kg) {
        setKilo("three kgs");
      } else if (Number(size) === cake.four_kg) {
        setKilo("four kgs");
      }
    });
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
            <span className="key-of-cake">NAME :</span>{" "}
            <span className="value-of-cake">{cake.name} </span>
          </div>
          <div>
            <span className="key-of-cake">TYPE :</span>{" "}
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
            <li> <span> < GiCakeSlice/>  Half Kg :</span> {cake.half_kg.toLocaleString()}Ksh</li>
            <li> <span>  < TbCake/>  One Kg :</span>{cake.one_kg.toLocaleString()} Ksh</li>
            <li> <span> <SiCakephp/>  Two kg: </span>  {cake.two_kg.toLocaleString()} Ksh</li>
            <li> <span> < HiOutlineCake/> Three kg: </span>  {cake.three_kg.toLocaleString()} Ksh</li>
            <li>  <span> <GiStairsCake/> Four Kg: </span> {cake.four_kg.toLocaleString()} Ksh</li>
          </ul>
        </div>
      )
  );

  const displayTotalPrice =
    totalPrice !== "" &&
    size !== "" &&
    cakes.map(
      (cake) =>
        cake.id === Number(params.id) && (
          <div className="display-total" key={cake.id}>
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

  const selectSizeAndNumberTitle = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <h3 className="select-size-number-text" key={cake.id}>
          FILL THE FORM BELOW TO COMPLETE YOUR ORDER
        </h3>
      )
  );

  const formData = cakes.map(
    (cake) =>
      cake.id === Number(params.id) && (
        <form ref={form} onSubmit={sendEmail}>
          <div className="pick-size" key={cake.id}>
            <label htmlFor="Price for each cake">Select a size:</label>
            <select
              required
              onChange={(e) => {
                setSize(e.target.value);
              }}
              value={size}
              name="Price_for_each_cake"
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
          <div className="pick-number">
            <span>Select number of cakes : </span>
            <input
              value={numberofCakes}
              type="number"
              name="number_of_cakes"
              placeholder="number of cakes"
              onChange={selectCakeNumber}
            />
          </div>
          <div className="customer-name-input">
            <span>Input your Name : </span>
            <input value={nameOfCustomer} onChange={(e)=>{
              setNameOfCustomer(e.target.value)
            }} name="Name_of_customer" type="name" required />
          </div>
          <div className="customer-number-input">
            <span>Input your number: </span>
            <input value={numberOfCustomer} onChange={(e)=>{
              setNumberOfCustomer(e.target.value)
            }} name="Number_of_customer" type="number" required />
          </div>
          <div className="do-not-display">
            <input name="Cake_Name" value={cake.name} readOnly />
            <input name="Size_Ordered" value={kilo} readOnly />
            <input
              name="Total_Price"
              value={totalPrice.toLocaleString()}
              readOnly
            />
          </div>
          <div className="submit-btn-div">
            <button type="submit" onClick={postCheckout}>
             ORDER NOW
            </button>
          </div>
        </form>
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
        </div>
      </div>
      {addToCartButton}
      {selectSizeAndNumberTitle}
      {formData}
      {displayTotalPrice}
    </div>
  );
}

export default OrderDetails;
