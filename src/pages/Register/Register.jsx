import React from "react";
import '../Register/Register.css'

function Register() {
    return(
      <div className="container">
				<div className="left">
					<div className="form">
					 <img src="../FundooLogo.png" ></img>
           <h3>Create your Fundoo Account</h3>
					 <form>
						<input type="text" name="" placeholder="First Name" required></input>
						<input type="text" name="" placeholder="Last Name" required></input>

						<input type="email" name="" placeholder="Username" required></input>
						<span>You can use letters, numbers & periods</span>
						<br />
						<a href="#" >Use my current email address instead</a>
						<input type="password" name=" " placeholder="Password" required></input>
						<input type="password" name=" " placeholder="Confirm" required></input>

						<span>Use 8 or more characters with a mix of letters, numbers & symbols</span>

						<div className="bottom-link">
							<a href="#" >Sign in instead</a>
							<input type="submit" id="next" value="Next"></input>
						</div>
					 </form>
					</div>
				</div>
				<div className="right">
					<img src="../Sidelogo.PNG"></img>
					<p>One account. All of Fundoo working for you.</p>
				</div>
      </div>
    )
}

export default Register