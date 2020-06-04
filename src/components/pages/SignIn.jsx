import React from "react"
import firebase from "firebase/app"
import { Link } from "react-router-dom"
import '../../styles/LogIn.scss'
import Iframe from 'react-iframe'

function SignIn(){

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      window.alert("successfully signed up!");
    }).catch(function(error) {
      window.alert(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      window.alert("Successfully signed in!");
    }).catch(function(error) {
      window.alert(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      window.alert("Successfully signed out!");
    }).catch(function(error) {
      window.alert(error.message);
    });
  }

      return (
        <div className='sign-in-body'>
          <br/><br/>
          <h1 className='s-i-title'>Welcome to The Futuro Writers' Page.</h1>
          <br/><br/>
          <h1 className='s-i-title'>Sign Up:</h1>
          <form onsubmit={doSignUp}>
            <input
              type="email"
              name="signinEmail"
              placeholder="new email"
            />
        
            <input
              type="password"
              name="signinPassword"
              placeholder="new Password"
            />
            <button type='submit'>Sign up</button>
          </form>
          <br/><br/>
          <h1 className='s-i-title'>Sign In:</h1>
          <form onSubmit={doSignIn}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' />
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' />
            <button type='submit'>Sign in</button>
          </form>
           <br/><br/>
            <h1><Link className='link' to="/writers" >Go to the Writers page?</Link></h1>
        <br/>
          <button className='sign-out-btn' onClick={doSignOut}>Sign out</button>
          <div className='vids'>
            <br/>
            <Iframe url='https://www.youtube.com/embed/fTu2hBsmY1Y'
              display='block'
              height='20px'
              width='20px'
              />
              <br/>
              <Iframe url='https://www.youtube.com/embed/EA4H-TvWAF4?autoplay=1'
              display='none'
              height='20px'
              width='20px'
              allow='autoplay'/>
          </div>
        </div>
      );
      
  }

export default SignIn
