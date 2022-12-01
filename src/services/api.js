import axios from "axios";

//Base da URL:https://api.themoviedb.org/3/

//URL DA API: /movie/now_playing?api_key=8e0497c7b2e77ee4e288b7d854a3d00d&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
