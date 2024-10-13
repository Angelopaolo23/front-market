import createAxiosInstance from "../axiosConfig.js";
const apiWithAuth = createAxiosInstance(true);

export const getOrders = async (id) => {
  try {
    const response = await apiWithAuth.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las compras del usuario.", error);
    throw error;
  }
};
