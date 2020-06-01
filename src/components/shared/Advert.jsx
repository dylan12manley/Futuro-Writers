import React from "react";
import PropTypes from "prop-types";




function Advert(props){
  return (
    <>
      <a href={props.redirectUrl}>
        <img src={props.img} alt={props.alt} style={{
          height: '300px',
          width: '300px',
        }}></img>
      </a>
    </>
  );
}


export default Advert;

Advert.propTypes = {
  title: PropTypes.string,
  redirectUrl: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
};
