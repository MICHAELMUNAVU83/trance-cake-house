import React from "react";
import { cakes } from "../cakedatabase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";

function Forests() {
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");
  const displayForestsCakes = cakes.map(
    (cake) =>
      cake.type === "Forests" && (
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
      <h2>FORESTS CAKES</h2>
      <OnDesktop>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: true,
            autoplay:true,
            speed:4000,
            type:"loop",
            interval:3000,
            rewindByDrag:true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayForestsCakes}
        </Splide>
      </OnDesktop>
      <OnMobile>
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            autoplay:true,
            rewindByDrag:true,
            interval:3000,
            speed:4000,
            type:"loop",
            gap:"2px",
            pagination: true,
            drag: "free",
           
           
          }}
        >
          {displayForestsCakes}
        </Splide>
      </OnMobile>
    </div>
  );
}

export default Forests;
