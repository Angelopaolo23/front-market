import createAxiosInstance from "../axiosConfig.js";
const api = createAxiosInstance(false);

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);
    return response;
  } catch (error) {
    console.error("Error al loguear el usuario:", error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response;
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    throw error;
  }
};
