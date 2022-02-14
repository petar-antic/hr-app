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
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzc3LCJpYXQiOjE2NDQ1ODk4NDksImV4cCI6MTY0NDU5NzA0OX0.ioGtnIT1kymAOnR3W2ESj59gT54rkh413nL9a9NfVgM';
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
