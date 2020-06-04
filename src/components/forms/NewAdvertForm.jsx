import React from "react";
import { useFirestore } from 'react-redux-firebase'
import { Link } from "react-router-dom"
import Iframe from 'react-iframe'

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
        fontFamily: 'Black Ops One',
        padding: '10vmin',
        textAlign: 'center',
      }}>
        <h1 style={{fontSize: '40px', textShadow: '.5px .5px #8E547E', color: '#8E545E',}}
        >Create New Advertisement</h1>
        <form onSubmit={addAdvertToFirestore}>
          <input
            type='string'
            name='imgUrl'
            placeholder='URL for Image'/>
          <br/><br/>
         <input
            type='text'
            name='redirectUrl'
            placeholder='Url for advertisment website'/>
          <br/><br/>
          <input
            type='text'
            name='altText'
            placeholder='Image Title'/>
          <br/><br/>
          <button type='submit'>Add Advert</button>
        </form>
        <div style={{paddingTop: '4vh',
                   fontSize: '30px'}}>
          <Link
            style={{color: '#8E545E',}} 
            to="/writers" >Writers Page</Link>
        </div>
        <br/><br/><br/><br/>
        <p>Song is Gimme Summn by TNGHT</p>
        <div>
          <Iframe url='https://www.youtube.com/embed/ybahtQqsMco?autoplay=1'
            display='none'
            allow='autoplay'/>
        </div>
      </div>
    );
  }


  export default NewAdvertForm;