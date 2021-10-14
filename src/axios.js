import axios from 'axios';

const API = axios.create({
  baseURL: 'https://whatsapp-mern-wsl.herokuapp.com/'
});

export default API