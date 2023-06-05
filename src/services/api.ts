import axios from "axios";

export const api = axios.create({
  baseURL: "https://urbtech-app.herokuapp.com",
});
