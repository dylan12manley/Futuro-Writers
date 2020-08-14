import React from "react"
import PropTypes from "prop-types"
import { useFirestore } from 'react-redux-firebase';
import Iframe from 'react-iframe'
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import './styles/FeaturedForm.scss'

function NewCarouselSlideForm(props){

  const formStyle = {
    backgroundColor: '#183023',
    color: '#8E545E',
    height: '100vh',
    fontFamily: 'Black Ops One'
  }
  const firestore = useFirestore();

  function addCarouselSlideToFirestore(event) {
    event.preventDefault();
    props.onNewCarouselSlideCreation();
    return firestore.collection('tickets').add(
      {
        image: event.target.image.value,
        headline: event.target.headline.value,
        articleLink: event.target.articleLink.value,
      }
    );
  }

  return (
      <div class='fFormBody'>
        <h1>Create a Featured Article Card</h1>
        <form onSubmit={addCarouselSlideToFirestore}>
          <input
            type='string'
            name='image'
            placeholder='Image'/>
          <br/>
          <br/>
         <input
            type='text'
            name='articleLink'
            placeholder='Article Link'/>
          <br/>
          <br/>
          <textarea
            type='text'
            name='headline'
            placeholder='Headline'/>
          <br/>
          <br/>
          <button type='submit'>Add Carousel Slide</button>
        </form>
        <div>
          <Iframe url='https://youtube.com/embed/sEjS-9wLPmc?autoplay=2'
            display='none'
            allow='autoplay'/>
        </div>
      </div>
    );
  }


  NewCarouselSlideForm.propTypes = {
    onNewCarouselSlideCreation: PropTypes.func
  };

  export default NewCarouselSlideForm;
