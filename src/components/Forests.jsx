import React from "react";
import { cakes } from "../cakedatabase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";
import { Link } from "react-router-dom";

function Forests() {
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");
  const OnTablet = layout.is("tablet");
  const OnPhablet = layout.is("phablet");
  const displayForestsCakes = cakes.map(
    (cake) =>
      cake.type === "Forests" && (
        <SplideSlide key={cake.id}>
          <div className="each-cake-div" key={cake.id}>
            <img className="each-cake-image" src={cake.image} alt="cake" />
            <Link to={`/order/${cake.id}`}>
              <p className="each-cake-name">{cake.name}</p>
            </Link>
          </div>
        </SplideSlide>
      )
  );
  return (
    <div>
      <h2 id="forests-cakes-div">FORESTS CAKES</h2>
      <OnDesktop>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            autoplay: true,
            pagination: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            speed: 6000,
            type: "loop",
            interval: 5500,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayForestsCakes}
        </Splide>
      </OnDesktop>
      <OnTablet>
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            autoplay: true,
            speed: 6000,
            pagination: false,
            type: "loop",
            interval: 5000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayForestsCakes}
        </Splide>
      </OnTablet>
      <OnPhablet>
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            autoplay: true,
            speed: 6000,
            pagination: false,
            type: "loop",
            interval: 5000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayForestsCakes}
        </Splide>
      </OnPhablet>
      <OnMobile>
        <Splide
          options={{
            perPage: 1,
            arrows: true,
            rewindByDrag: true,
            pagination: false,
            type: "loop",
            padding: { left: "20px" },
            gap: "10px",
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
