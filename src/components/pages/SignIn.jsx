import React from "react"
import firebase from "firebase/app"
import { Link } from "react-router-dom"
import '../../styles/LogIn.scss'
import Iframe from 'react-iframe'
import WritersTitle from '../../assets/images/assci-title.png'

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
          
          <img src={WritersTitle} className='title' alt='writers title'></img>
          
          <form onSubmit={doSignIn}>
            <div className='s-i-title'> 
              <h2><span className='input-title'>Sign In:</span>
                <input
                  type='text'
                  name='signinEmail'
                  placeholder='Email - user@email.com' />
                <input
                  type='password'
                  name='signinPassword'
                  placeholder='Password' />
                <button type='submit'>sGo!</button>
              </h2>
            </div>
          </form>
           <br/><br/>
          <h1><Link className='link' to="/writers" >Go to the Writers page?</Link></h1>
          <br/>
          <h1><Link className='link' to="/signup" >Go to the Sign Up page?</Link></h1>
          <br/>
          <button className='sign-out-btn' onClick={doSignOut}>Sign out</button>
          <div className='vids'>
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
