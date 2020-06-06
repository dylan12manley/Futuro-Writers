import React from "react"
import firebase from "firebase/app"
import { Link } from "react-router-dom"
import '../../styles/LogIn.scss'
import Iframe from 'react-iframe'

function SignUp(){

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
            <h1><Link className='link' to="/writers" >Go to the Writers page?</Link></h1>
        </div>
      );
      
  }

export default SignUp
