import axios from 'axios';

let baseURL = process.env.REACT_APP_BASE_URL;

// prettier-ignore
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const api = axios.create({
  baseURL,
  headers,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
