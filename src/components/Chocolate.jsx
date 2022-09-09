import React from "react";
import { cakes } from "../cakedatabase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";
import { Link } from "react-router-dom";

function Chocolate() {
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnTablet = layout.is("tablet");
  const OnPhablet = layout.is("phablet");
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");

  const displayChocolateCakes = cakes.map(
    (cake) =>
      cake.type === "Chocolate" && (
        <SplideSlide key={cake.id}>
          <div className="each-cake-div" key={cake.id}>
            <img
              className="each-cake-image"
              src={cake.more_images[1]}
              alt="cake"
            />
            <Link to={`/order/${cake.id}`}>
              <p className="each-cake-name">{cake.name}</p>
            </Link>
          </div>
        </SplideSlide>
      )
  );
  return (
    <div>
      <h2 id="chocolate-cakes-div">CHOCOLATE CAKES</h2>
      <OnDesktop>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pauseOnHover: true,
            pauseOnFocus: true,
            pagination: false,
            autoplay: true,
            speed: 5500,
            type: "loop",
            interval: 4000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayChocolateCakes}
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
          {displayChocolateCakes}
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
          {displayChocolateCakes}
        </Splide>
      </OnPhablet>
      <OnMobile>
        <Splide
          options={{
            perPage: 1,
            arrows: true,
            rewindByDrag: true,
            padding: { left: "20px" },
            gap: "10px",
            pagination: false,
            type: "loop",

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
