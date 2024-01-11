// eslint-disable-next-line no-unused-vars
import React from 'react'
import pizza from "../assets/10001.jpg"
//import pizza2 from "../assets/10004.jpg"
import pizza3 from "../assets/10005.jpg"

import pizzadiv from "../assets/10003.jpg"
import pizzadiv1a from "../assets/capt123.jpg"
import pizzadiv11 from "../assets/Capturea2.jpg"
import pizzadiv111 from "../assets/Capturea3.jpg"
import pizzadiv1111 from "../assets/Capturea4.jpg"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {

  return (
    <div>
     
      
      <div >
      <h className="styleh">Gallery</h>
      </div>
      <Carousel className="coursel">
                <div className='image'>
              
                <div>
                  <img src={pizzadiv1111} alt="img" /><br/>

              </div>
           
               
                </div>

                <div className='image'>
                <div>
                  <img src={pizzadiv11} alt="img" /><br/>

              </div>
   
                </div>
                <div className='image'>
                <div>
                  <img src={pizzadiv1a} alt="img" /><br/>

              </div>
   
                </div>
                <div className='image'>
                <div>
                  <img src={pizzadiv1111} alt="img" /><br/>

              </div>
   
                </div>
            </Carousel>
    </div>
  )
}

export default Gallery
