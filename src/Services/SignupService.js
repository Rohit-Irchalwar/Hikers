import axios from "axios";
//import Signupjsx from "../pages/Signup/Signupjsx";

const SIGNUP_API_BASE_URL = "http://localhost:8080/signup"
const SIGNUP_GETAPI_BASE_URL = "http://localhost:8080/viewsignup"

class SignupService {

    getSignup(){
        return axios.get(SIGNUP_GETAPI_BASE_URL, {
            headers: {
              "access-control-allow-origin": "*",
            },
          }); 
        

  }

    createSignup(signup) {
        return axios.post(SIGNUP_API_BASE_URL, signup, {
          headers: {
            "access-control-allow-origin": "*",
          },
        });
      }
}

export default new SignupService;