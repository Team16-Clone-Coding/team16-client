import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.79.234.172/"
});

export default instance;