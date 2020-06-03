import React from "react";
import { Carousel } from 'antd';
import writers from '../../assets/images/writers.jpg';

const styledCarousel = {
  paddingTop: 'calc(118px + 5vmin)',
  height: 'calc(42vh + 60px)',
}

const styledImage = {
  height: 'calc(41vh + 60px)',
  width: '100%',
}

function MainCarousel(){
  return (
    <div style={styledCarousel}>
      <Carousel 
        effect="fade"
        autoplay>
        <div>
          <img src={writers} alt={writers} style={styledImage}></img>
        </div>
    </Carousel>
    </div>
  );
}


export default MainCarousel;