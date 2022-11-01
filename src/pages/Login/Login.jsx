import React from 'react';
import '../Login/Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  return(
  <div className="maindiv">
    <img src="../FundooLogo.png" alt="Fundoo"></img>
    <h2 className="signin">Sign in</h2>
    <h4 className="use">Use your Fundoo Account</h4>  
    <TextField type="email" 
    sx={{ marginTop:4, width: 0.92 }} 
    InputLabelProps={{style: {fontSize: 13}}}
    label="Email ID"  size="small" required 
	/>
    <TextField type="password" 
    sx={{ marginTop:4, width: 0.92 }} 
    InputLabelProps={{style: {fontSize: 13}}}
    label="Password"  size="small" required 
	/>
    <h5 className="forgot">Forgot Email or password?</h5>
    <h4 className="guest">Not your computer? Use Guest mode to sign in privately.<span> Learn more</span></h4>
    <div className="buttonContainder">
        <Button variant="text">Create account</Button>
        <Button variant="contained">NEXT</Button>
	</div>
</div>
  )
}

export default Login