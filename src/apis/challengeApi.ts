import axios from "axios";

const challengeApi = axios.create({
  baseURL: "/data",
});

export default challengeApi;
