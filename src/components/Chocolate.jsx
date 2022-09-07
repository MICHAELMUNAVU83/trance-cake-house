import React from "react";
import { cakes } from "../cakedatabase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";
import {Link} from "react-router-dom"

function Chocolate() {
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");
 
  const displayChocolateCakes = cakes.map(
    (cake) =>
      cake.type === "Chocolate" && (
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
      <h2>CHOCOLATE CAKES</h2>
      <OnDesktop>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pauseOnHover:true,
            pauseOnFocus:true,
            pagination: false,
            autoplay:true,
            speed:5500,
            type:"loop",
            interval:4000,
            rewindByDrag:true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayChocolateCakes}
        </Splide>
      </OnDesktop>
      <OnMobile>
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            autoplay:true,
            rewindByDrag:true,
            pauseOnHover:true,
            pauseOnFocus:true,
            interval:4000,
            speed:5500,
            type:"loop",
            gap:"2px",
            pagination: false,
            drag: "free",
           
           
          }}
        >
          {displayChocolateCakes}
        </Splide>
      </OnMobile>
    </div>
  );
}

export default Chocolate;
