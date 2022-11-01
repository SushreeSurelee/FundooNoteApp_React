import React from "react";
import '../Register/Register.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Register() {
  return(
   <div className="container">
		<div className="left">
		<img src="../FundooLogo.png" alt="Fundoo"></img>
        <h3>Create your Fundoo Account</h3>
		<form>
			<TextField type="text" 
			sx={{ marginTop:0.7,width: 0.49}} 
  			InputLabelProps={{style: {fontSize: 13}}} // font size of input label
			label="First Name"
			variant="outlined" size="small" required 
			/>

			<TextField type="text" 
			sx={{ marginTop:0.7,marginLeft:0.7, width: 0.49 }} 
			InputLabelProps={{style: {fontSize: 13}}}
			label="Last Name" 
			variant="outlined" size="small" required 
			/>

			<TextField type="email" 
			sx={{ marginTop:4, width: 0.99 }} 
			InputLabelProps={{style: {fontSize: 13}}}
			label="Username"  size="small" required 
			/>
			<span>You can use letters, numbers & periods</span>
			<br /><br/>
			<a href="https://www.google.com/" >Use my current email address instead</a>
			
            <TextField type="password" 
			sx={{ marginTop:4, width: 0.49}} 
 			InputLabelProps={{style: {fontSize: 13}}}
			label="Password"
			variant="outlined" size="small" required 
			/>

		  	<TextField type="password" 
			sx={{ marginTop:4,marginLeft:0.7, width: 0.49 }} 
			InputLabelProps={{style: {fontSize: 13}}}
			label="Confirm" 
			variant="outlined" size="small" required 
			/>
			<span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
						
			<div className="bottom-link">
				<Button variant="text">Sign In instead</Button>
                <Button variant="contained">NEXT</Button>
			</div>
		</form>
	    </div>
		<div className="right">
			<img src="../Sidelogo.PNG" alt="sidelogo"></img>
			<p>One account. All of Fundoo working for you.</p>
        </div>
    </div>
  )
}

export default Register