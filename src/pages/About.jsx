
import React  from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { slideImages } from '../cakedatabase'

function About() {
  const AboutImages =slideImages.map(about=>(
    <SplideSlide>
    <div >
        <img className="gallery-image" src={about} alt="extra " />

    </div>
  </SplideSlide>
    
)) 


  
 
  return (
    <div>
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
          {AboutImages}
        </Splide>

   
    
    </div>
   
  )
}

export default About

