import axios from "axios";
// const baseUrl = "http://localhost:3050/";
const baseUrl = "https://server.privatesale.live/"
const token = localStorage.getItem("token");
const instance = axios.create({
  baseURL: baseUrl,
  headers: { authorization: token },
});

export default instance;
