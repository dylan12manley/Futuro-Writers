import React from "react";
import { Carousel } from 'antd';
import iOS2 from '../../assets/images/iOS2.jpg';

const styledCarousel = {
  paddingTop: 'calc(118px + 5vmin)',
  height: 'calc(42vh + 30px)',
}

const styledImage = {
  height: 'calc(41vh + 30px)',
  width: '100%',
}

function MainCarousel(){
  return (
    <div style={styledCarousel}>
      <Carousel 
        effect="fade"
        autoplay>
        <div>
          <img src={iOS2} alt={iOS2} style={styledImage}></img>
        </div>
    </Carousel>
    </div>
  );
}


export default MainCarousel;