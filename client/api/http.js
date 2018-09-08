import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:7000',
  headers: {
    Accept: 'application/json'
  }
});

export default http;
