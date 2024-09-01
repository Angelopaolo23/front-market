import createAxiosInstance from "../axiosConfig.js";
const api = createAxiosInstance(false);

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
};
