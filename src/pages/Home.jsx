import React from "react";
import Classics from "../components/Classics";
import Chocolate from "../components/Chocolate";
import Forests from "../components/Forests";
import Fruity from "../components/Fruity";
function Home() {
  return (
    <div className="home-div">
      <div className="quote-div">
        <p>For goodness sake, eat some cake!</p>
        <p>--vananenae</p>
      </div>
      <div className="all-cakes-home-div">
        <Classics />
        <Forests/>
        <Chocolate/>
        <Fruity/>
      </div>
    </div>
  );
}

export default Home;
