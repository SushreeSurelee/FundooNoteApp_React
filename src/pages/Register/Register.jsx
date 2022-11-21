import React from "react";
import '../Register/Register.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { signupApi } from "../../services/userService";
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";
import { makeStyles} from "@mui/styles";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;

const useStyle = makeStyles({
	container:{
		height: '90vh',
  		width: '55vw',
  		border: '1px solid #dadce0',
  		borderRadius: '8px',
  		display: 'flex',
  		marginLeft: '300px',
  		marginTop: '30px'
	}
})

function Register() {
	const classes = useStyle()
	const navigate = useNavigate()
	const[signupobj,setsignupobj] = useState({firstName:'', lastName:'',service: "advance", email:'', password:''})
	const [regexobj,setregexobj] = useState({fnameBorder:false,fnameHelper:'',lnameBorder:false,lnameHelper:'',emailBorder:false,emailHelper:'',passwordBorder:false,passwordHelper:''})

	const takeFirstname = (e) => {
		setsignupobj(prevstate => ({...prevstate, firstName:e.target.value}))
	}
	const takeLastname = (e) => {
		setsignupobj(prevstate => ({...prevstate, lastName:e.target.value}))
	}
	const takeUsername = (e) => {
		setsignupobj(prevstate => ({...prevstate, email:e.target.value}));
	}
	const takePassword = (e) => {
		setsignupobj(prevstate => ({...prevstate, password:e.target.value}));
	}

	const signin = () => {
		navigate('/')
	}

	const submit = () => {
		let fNameTest = fnameRegex.test(signupobj.firstName)
		let lNameTest = fnameRegex.test(signupobj.lastName)
		let emailTest = emailRegex.test(signupobj.email)
		let passwordTest = passwordRegex.test(signupobj.password)
		if(fNameTest===false)
		{
			setregexobj(prevstate => ({...prevstate, 
				fnameBorder:true, fnameHelper:'Enter a valid firstname'
			}))
		}
		else if(fNameTest===true)
		{
			setregexobj(prevstate => ({...prevstate, 
				fnameBorder:false, fnameHelper:''
			}))
		}

		if(lNameTest===false)
		{
			setregexobj(prevstate => ({...prevstate, 
				lnameBorder:true, lnameHelper:'Enter a valid lastname'
			}))
		}
		else if(lNameTest===true)
		{
			setregexobj(prevstate => ({...prevstate, 
				lnameBorder:false, lnameHelper:''
			}))
		}

		if(emailTest===false)
		{
			setregexobj(prevstate => ({...prevstate, 
				emailBorder:true, emailHelper:'Enter a valid email address'
			}))
		}
		else if(emailTest===true)
		{
			setregexobj(prevstate => ({...prevstate, 
				emailBorder:false, emailHelper:''
			}))
		}

		if(passwordTest===false)
		{
			setregexobj(prevstate => ({...prevstate, 
				passwordBorder:true, passwordHelper:'Enter a valid password'
			}))
		}
		else if(passwordTest===true)
		{
			setregexobj(prevstate => ({...prevstate, 
				passwordBorder:false, passwordHelper:''
			}))
		}

		if(fNameTest===true && lNameTest===true && emailTest===true && passwordTest===true)
		{
			signupApi(signupobj).then((response) => {
				console.log(response)
				navigate('/dashboard')
			}).catch((error) => {
				console.log(error)
			})
		}

		console.log(signupobj)
	}

  return(
	<Box className={classes.container}>
	<div className="left">
		<img src="../FundooLogo.png" alt="Fundoo"></img>
        <h3>Create your Fundoo Account</h3>

		<TextField  type="text" 
		sx={{ marginTop:0.7,width: 0.49}} 
  		InputLabelProps={{style: {fontSize: 13}}}
		label="First Name"
		variant="outlined" size="small" required 
		onChange={takeFirstname}
		error={regexobj.fnameBorder} helperText={regexobj.fnameHelper}
		/>
		<TextField type="text" 
		sx={{ marginTop:0.7,marginLeft:0.7, width: 0.49 }} 
		InputLabelProps={{style: {fontSize: 13}}}
		label="Last Name" 
		variant="outlined" size="small" required 
		onChange={takeLastname}
		error={regexobj.lnameBorder} helperText={regexobj.lnameHelper}
		/>
		
		<TextField type="email" 
		sx={{ marginTop:4, width: 0.99 }} 
		InputLabelProps={{style: {fontSize: 13}}}
		label="Username"  
		variant="outlined" size="small" required 
		onChange={takeUsername}
		error={regexobj.emailBorder} helperText={regexobj.emailHelper}
		/>
		<p>You can use letters, numbers & periods</p>
		<br /><br/>
		<a href="https://www.google.com/" >Use my current email address instead</a>
		
		<TextField type="password" 
		sx={{ marginTop:4, width: 0.49}} 
 		InputLabelProps={{style: {fontSize: 13}}}
		label="Password"
		variant="outlined" size="small" required 
		onChange={takePassword}
		error={regexobj.passwordBorder} helperText={regexobj.passwordHelper}
		/>
		<TextField type="password" 
		sx={{ marginTop:4,marginLeft:0.7, width: 0.49 }} 
		InputLabelProps={{style: {fontSize: 13}}}
		label="Confirm" 
		variant="outlined" size="small" required 
		/>
		<p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
		<div className="bottom-link">
			<Button variant="text" onClick={signin}>Sign In instead</Button>
            <Button variant="contained" onClick={submit}>NEXT</Button>
		</div>
		</div>

	<div className="right">
		<img src="../Sidelogo.PNG" alt="sidelogo"></img>
		<p>One account. All of Fundoo working for you.</p>
    </div>
  	</Box>
  
)
}

export default Register