import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export default apiCall;
