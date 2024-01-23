import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slide_Comp() {

   const  fixedHeight=230;
    const fixedWidth=20 ;

  return (
    <Carousel >
      <Carousel.Item>
        <img
        width={fixedWidth}
        height={fixedHeight}
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1700994295451_web.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
         width={fixedWidth}
         height={fixedHeight}
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1702630360444_salarweb.jpg"
          alt="Second slide"
        />
     </Carousel.Item>
      <Carousel.Item>
        <img
         width={fixedWidth}
         height={fixedHeight}
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1702543659745_oppenheimerpricedropweb.jpg"
          alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
  );
};

export default Slide_Comp;

