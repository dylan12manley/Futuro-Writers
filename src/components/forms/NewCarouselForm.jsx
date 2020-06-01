import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase'

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
      <div style={formStyle}>
        <form onSubmit={addCarouselSlideToFirestore}>
          <input
            type='string'
            name='image'
            placeholder='Image'/>
         <input
            type='text'
            name='articleLink'
            placeholder='Article Link'/>
          <textarea
            type='text'
            name='headline'
            placeholder='Headline'/>
          <button type='submit'>Add Carousel Slide</button>
        </form>
      </div>
    );
  }

  NewCarouselSlideForm.propTypes = {
    onNewCarouselSlideCreation: PropTypes.func
  };

  export default NewCarouselSlideForm;
