import React from "react";
import { cakes } from "../cakedatabase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";

function Fruity() {
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");
  const displayFruityCakes = cakes.map(
    (cake) =>
      cake.type === "Fruity" && (
        <SplideSlide key={cake.id}>
          <div className="each-cake-div" key={cake.id}>
            <img className="each-cake-image" src={cake.image} alt="cake" />
            <p className="each-cake-name">{cake.name}</p>
          </div>
        </SplideSlide>
      )
  );
  return (
    <div>
      <h2>FRUITY CAKES</h2>
      <OnDesktop>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: true,
            rewindByDrag:true,
            type:"loop",
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayFruityCakes}
        </Splide>
      </OnDesktop>
      <OnMobile>
        <Splide
          options={{
            perPage: 1,
            arrows: false,
          
            rewindByDrag:true,
           
            type:"loop",
            gap:"2px",
            pagination: true,
            drag: "free",
           
          }}
        >
          {displayFruityCakes}
        </Splide>
      </OnMobile>
    </div>
  );
}

export default Fruity;
