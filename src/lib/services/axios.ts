import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.VITE_BACKEND_URL,
  timeout: 60000, //60 seconds timeout
  withCredentials: true, //enable cookies to be sent along with every request
});
