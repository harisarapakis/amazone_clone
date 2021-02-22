import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-challenge-59942.cloudfunctions.net/api "
  // 'http://localhost:5001/challenge-59942/us-central1/api' // The API (cloud function) URL
  
});

export default instance;


