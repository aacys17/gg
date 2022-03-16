import axios from 'axios';

// const baseURL = 'http://localhost:27017';

// let authTokens = localStorage.getItem('authTokens')?JSON.parse(localStorage.getItem('authToken'))
// const URL = process.env.REACT_APP_API_URL;
const URL = 'http://localhost:5000';

const jwtToken = localStorage.getItem('jwt');
// console.log(jwtToken);
const axiosInterceptor = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${jwtToken}`,
  },
});

export default axiosInterceptor;