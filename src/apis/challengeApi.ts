import axios from "axios";
import { BASE_URL } from "../constants";
console.log(BASE_URL);
const challengeApi = axios.create({
  baseURL: BASE_URL,
});

export default challengeApi;
