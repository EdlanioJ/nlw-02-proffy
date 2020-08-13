import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.SERVER_LINK}:3333`,
});

export default api;
