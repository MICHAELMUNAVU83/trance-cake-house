import React from 'react'
import { extra_images } from '../cakedatabase'
function Gallery() {
    const galleryImages = extra_images.map(extra_image=>(
        <div >
            <img className="gallery-image" src={extra_image} alt="extra " />

        </div>
        
    ))
  return (
    <div className="gallery" >
        {galleryImages}
    </div>
  )
}

export default Gallery