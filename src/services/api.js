import axios from 'axios';

const api = axios.create({ baseURL: 'http://bdoapi.herokuapp.com'});

export default api;