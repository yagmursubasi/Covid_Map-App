import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "7b18520e29msh48b76cf15ed13b8p1a3854jsn747aebabad8c",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});
export default api;
