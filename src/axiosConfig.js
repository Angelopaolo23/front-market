import axios from "axios";
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const createAxiosInstance = (useAuth = false) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
  });

  if (useAuth) {
    instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          // Manejar token expirado
          localStorage.removeItem("token");
          //HACER SETISLOGGEDIN(FALSE)
        }
        return Promise.reject(error);
      }
    );
  }

  return instance;
};
export default createAxiosInstance;
