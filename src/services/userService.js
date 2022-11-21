import axios from "axios";

export const loginApi = (signinobj) => {
let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",signinobj)
console.log("checking" ,signinobj)
//let response = axios.post("http://localhost:44396/api/User/Login",{request:{'withCredentials':true}})

//  let response =  axios({method: 'post',
//     url:'https://localhost:44396/api/User/Login',
//     data:signinobj,
//     headers:{'Access-Control-Allow-Origin':'localhost:44396','Access-Control-Allow-Method':'POST'}
// })
 return response
}

export const signupApi = (registerobj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerobj)
    //let response = axios.post("https://localhost:44396/api/User/Register",registerobj)
    return response
   }