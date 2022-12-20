import axios from "axios";

export const loginApi = (signinobj) => {
// let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",signinobj)
let response = axios.post("https://localhost:44396/api/User/Login",signinobj)
 return response
}

export const signupApi = (registerobj) => {
    // let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerobj)
    let response = axios.post("https://localhost:44396/api/User/Register",registerobj)
    return response
   }