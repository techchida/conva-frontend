import axios from "axios";
const baseURL = process.env.REACT_APP_BASEURL;
console.log(baseURL);

const instance = axios.create({
  baseURL,
  "Content-Type": "application/json",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = Object.assign({
        Authorization: `Bearer ${token}`,
      });
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
