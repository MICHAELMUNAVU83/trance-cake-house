import React from "react";
import { cakes } from "../cakedatabase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";
import { Link } from "react-router-dom";

function Classics() {
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");
  const displayClassicsCakes = cakes.map(
    (cake) =>
      cake.type === "classic" && (
        <SplideSlide key={cake.id}>
          <div className="each-cake-div" key={cake.id}>
            <img className="each-cake-image" src={cake.image} alt="cake" />
            <Link  to={`/order/${cake.id}`}>
            <p className="each-cake-name">{cake.name}</p>
            </Link>

          
            
          </div>
        </SplideSlide>
      )
  );
  return (
    <div>
      <h2>CLASSIC CAKES</h2>
      <OnDesktop>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            autoplay:true,
            speed:6000,
            pagination: false,
            type:"loop",
            interval:5000,
            rewindByDrag:true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayClassicsCakes}
        </Splide>
      </OnDesktop>
      <OnMobile>
        <Splide
          options={{
            perPage: 1,
            arrows: true,
            rewindByDrag:true,
            pagination: false,
            padding:{left:"20px"},
            gap:"10px",
            type:"loop",
           
            drag: "free",
           
          }}
        >
          {displayClassicsCakes}
        </Splide>
      </OnMobile>
    </div>
  );
}

export default Classics;
