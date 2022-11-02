import axios from "axios";

export const loginApi = (signinobj) => {
 let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",signinobj)
 return response
}

export const signupApi = (registerobj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerobj)
    return response
   }