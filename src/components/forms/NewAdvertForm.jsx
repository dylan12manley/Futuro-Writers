import React from "react";
import { useFirestore } from 'react-redux-firebase'
import { Link } from "react-router-dom";

function NewAdvertForm(){

  const firestore = useFirestore();


  function addAdvertToFirestore(event) {
    event.preventDefault();
    window.alert('Ay! Added Ad')
    return firestore.collection('tickets').add(
      {
        imgUrl: event.target.imgUrl.value,
        redirectUrl: event.target.redirectUrl.value,
        altText: event.target.altText.value,
      }
    );
  }

  return (
      <div style={{
        backgroundColor: '#183023',
        color: '#8E545E',
        height: '100vh',
        fontFamily: 'Black Ops One'
      }}>
        <form onSubmit={addAdvertToFirestore}>
          <input
            type='string'
            name='imgUrl'
            placeholder='URL for Image'/>
         <input
            type='text'
            name='redirectUrl'
            placeholder='Url for advertisment website'/>
          <input
            type='text'
            name='altText'
            placeholder='Image Title'/>
          <button type='submit'>Add Advert</button>
        </form>
        <div style={{paddingTop: '4vh',
                  textAlign: 'center',
                   color: '#8E545E'}}>
          <Link to="/admin" >Admin Page</Link>
          <br></br>
          <Link to="/home" >Home</Link>
        </div>
      </div>
    );
  }


  export default NewAdvertForm;