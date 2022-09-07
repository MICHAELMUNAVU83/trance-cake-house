import React from "react";
import Classics from "../components/Classics";
import Chocolate from "../components/Chocolate";
import Forests from "../components/Forests";
import Fruity from "../components/Fruity";
import Typed from "react-typed";
function Home() {
  const cakesTyped = (
    <div className="typed">
      <span className="cakes-should-be">cakes should be  </span>
      <span>{"    "}</span>
      <span className="tasty-delete">
        <Typed
          strings={["tasty", "sweet", "From Didis cake House"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
      </span>
    </div>
  );
  return (
    <div className="home-div">
      <div className="quote-div">{cakesTyped}</div>
      <div className="all-cakes-home-div">
        <Classics />
        <Forests />
        <Chocolate />
        <Fruity />
      </div>
    </div>
  );
}

export default Home;
