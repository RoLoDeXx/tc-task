import axios from "axios";

let local = axios.create({
  baseURL: "http://localhost:5000/",
});

export default local;
