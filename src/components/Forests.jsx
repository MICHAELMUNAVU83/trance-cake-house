import React from "react";
import { cakes } from "../cakedatabase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";
import {Link} from "react-router-dom"

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
            <Link  to={`/order/${cake.id}`}>
            <p className="each-cake-name">{cake.name}</p>
            </Link>

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
            autoplay:true,
            pagination: false,
            pauseOnHover:true,
            pauseOnFocus:true,
            speed:6000,
            type:"loop",
            interval:5500,
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
            arrows: true,
            rewindByDrag:true,
            pagination: false,
            padding: { left: "7%", right: "2%" },
            type:"loop",
            gap:"2px",
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
