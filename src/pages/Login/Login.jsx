import React from 'react';
import '../Login/Login.css';

function Login() {
  return(
    <div className="maindiv">
        <img src="../GoogleLogo.png" alt="Google"></img>
        <h2 className="signin">Sign in</h2>
        <h4 className="use">Use your Google Account</h4>  
        <div className="inputbox">
        <input type="email" name="email" placeholder='Email' required/>  
        </div>
        <div className="inputbox">
        <input type="password" name="password" placeholder='Password' required />  
        </div>
        <h5 className="forgot">Forgot Email or password?</h5>
        <h4 className="guest">Not your computer? Use Guest mode to sign in privately.<span> Learn more</span></h4>
        <div className="buttonContainder">
          <a href="https://www.google.com/" className="createbutton">Create account</a>
          <a href="https://www.google.com/" className="nextbutton"> Next</a>
        </div>
    </div>
  )
}

export default Login