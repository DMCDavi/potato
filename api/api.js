import axios from 'axios';

const api = axios.create({
  baseURL: 'https://potato-back.herokuapp.com',
});

export default api;