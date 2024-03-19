import axios from "axios";
//import feedbackjsx from "../pages/feedback/feedbackjsx";

const FEEDBACK_API_BASE_URL = "http://localhost:8080/submitfeedback"
const FEEDBACK_GETAPI_BASE_URL = "http://localhost:8080/viewfeedback"

class FeedbackService {

    getFeedback(){
        return axios.get(FEEDBACK_GETAPI_BASE_URL, {
            headers: {
              "access-control-allow-origin": "*",
            },
          }); 
        

  }

    createFeedback(feedback) {
        return axios.post(FEEDBACK_API_BASE_URL, feedback, {
          headers: {
            "access-control-allow-origin": "*",
          },
        });
      }
}

export default new FeedbackService;