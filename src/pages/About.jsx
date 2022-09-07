
import React  from 'react';
import Typed from 'react-typed';
function About() {
 
  return (
    <div>
  
    <span>
      CAKES SHOULD BE
    </span>
    <span>
     {"  "}
    </span>

    <Typed
    strings={[
        'tasty',
        'sweet',
        'From Didis cake House']}
        typeSpeed={40}
        backSpeed={50}
        
        loop >
        
    </Typed>
</div>
  )
}

export default About

