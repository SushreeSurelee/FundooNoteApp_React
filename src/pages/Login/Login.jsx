import React from 'react';
import '../Login/Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { loginApi } from '../../services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login() {
    const [loginobj,setloginobj] = useState({email:'', password:''})
    const [regexobj,setregexobj] = useState({emailBorder:false,emailHelper:'',passwordBorder:false,passwordHelper:''})

    const takeEmail = (e) => {
        setloginobj(prevstate => ({...prevstate, email:e.target.value}));
        console.log(loginobj);
    }
    const takePass = (e) => { 
        setloginobj(prevstate => ({...prevstate, password:e.target.value}));
        console.log(loginobj);
    }
    const submit = () => {
        let emailTest = emailRegex.test(loginobj.email)
        let passwordTest = passwordRegex.test(loginobj.password)

        if(emailTest===false)
        {
            setregexobj(prevstate => ({...prevstate,
                emailBorder:true,
                emailHelper:"Enter a valid email"
            }))
        }
        else if(emailTest===true)
        {
            setregexobj(prevstate => ({...prevstate,
                emailBorder:false,
                emailHelper:''
            }))
        }

        if(passwordTest===false)
        {
            setregexobj(prevstate => ({...prevstate,
                passwordBorder:true,
                passwordHelper:"Enter a valid Password"
            }))
        }
        else if(passwordTest===true)
        {
            setregexobj(prevstate => ({...prevstate,
                passwordBorder:false,
                passwordHelper:''
            }))
        }

        if(emailTest===true && passwordTest===true)
        {
            loginApi(loginobj).then((response) => {
                console.log(response)
                localStorage.setItem("token",response.data.id)
            }).catch((error) => {
                console.log(error)
            })
        }
        console.log(loginobj);
    }

  return(
<div className='loginpage'>
<div className="maindiv">
    <img src="../FundooLogo.png" alt="Fundoo"></img>
    <h2 className="signin">Sign in</h2>
    <h4 className="use">Use your Fundoo Account</h4>

    <TextField type="email" 
    sx={{ marginTop:4, width: 0.92 }} 
    InputLabelProps={{style: {fontSize: 13}}}
    label="Email ID"  size="small" required 
    onChange={takeEmail} 
    error={regexobj.emailBorder} helperText={regexobj.emailHelper}
	/>
    <TextField type="password" 
    sx={{ marginTop:4, width: 0.92 }} 
    InputLabelProps={{style: {fontSize: 13}}}
    label="Password"  size="small" required 
    onChange={takePass}
    error={regexobj.passwordBorder} helperText={regexobj.passwordHelper}
	/>
    <h5 className="forgot">Forgot Email or password?</h5>
    <h4 className="guest">Not your computer? Use Guest mode to sign in privately.<span> Learn more</span></h4>
    <div className="buttonContainder">
        <Button variant="text">Create account</Button>
        <Button variant="contained" onClick={submit}>NEXT</Button>
	</div>
    </div>
</div>
    
  )
}

export default Login